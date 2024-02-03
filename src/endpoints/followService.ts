// Import necessary modules, types, and utility functions
import { authPayload } from '../models/authModels';
import { ToggleFollowUserInput, ToggleFollowUserPayload } from '../models/followModels';
import { apiUtils } from '../utils/apiUtils';

export class FollowService {
  /**
   * Toggle follow state for a user.
   * @param {ToggleFollowUserInput} input - The input data for toggling the follow state.
   * @param {authPayload} auth - The authentication payload for the authenticated user.
   * @returns {Promise<ToggleFollowUserPayload>} - The response indicating the success or failure of toggling the follow state.
   */
  async toggleFollowUser(input: ToggleFollowUserInput, auth: authPayload): Promise<ToggleFollowUserPayload> {
    try {
      // Define your GraphQL mutation for toggling follow state
      const graphqlMutation = `
        mutation ToggleFollowUser($input: ToggleFollowUserInput!) {
          toggleFollowUser(input: $input) {
            user {
              // Include the necessary fields for the user object
              id
              username
              // Add more fields if needed
            }
          }
        }
      `;

      // Make the API request using the apiUtils module
      const response  : any = await apiUtils.post(auth, { query: graphqlMutation, variables: { input } });

      // Extract and return the relevant data from the response
      return response.data.data.toggleFollowUser;
    } catch (error) {
      // Handle errors appropriately
      console.error('Error during toggleFollowUser:', error);
      throw error;
    }
  }
}

export default new FollowService();
