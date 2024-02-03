// Import necessary modules, types, and utility functions
import { authPayload } from '../models/authModels';
import { SubscribeToNewsletterInput, SubscribeToNewsletterPayload, UnsubscribeFromNewsletterInput, UnsubscribeFromNewsletterPayload } from '../models/newsletterModels';
import { apiUtils } from '../utils/apiUtils';

export class newsletterService {
  /**
   * Subscribe to a newsletter.
   * @param {SubscribeToNewsletterInput} input - The input data for subscribing to a newsletter.
   * @returns {Promise<SubscribeToNewsletterPayload>} - The response indicating the success or failure of the subscription.
   */
  async subscribeToNewsletter(input: SubscribeToNewsletterInput, auth : authPayload): Promise<SubscribeToNewsletterPayload> {
    try {
      // Define your GraphQL mutation for subscribing to a newsletter
      const graphqlMutation = `
        mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
          subscribeToNewsletter(input: $input) {
            status
          }
        }
      `;

      // Make the API request using the apiUtils module
      const response : any = await apiUtils.post(auth, { query: graphqlMutation, variables: { input } });

      // Extract and return the relevant data from the response
      return response.data.data.subscribeToNewsletter;
    } catch (error) {
      // Handle errors appropriately
      console.error('Error during subscribeToNewsletter:', error);
      throw error;
    }
  }

  /**
   * Unsubscribe from a newsletter.
   * @param {UnsubscribeFromNewsletterInput} input - The input data for unsubscribing from a newsletter.
   * @returns {Promise<UnsubscribeFromNewsletterPayload>} - The response indicating the success or failure of the unsubscription.
   */
  async unsubscribeFromNewsletter(input: UnsubscribeFromNewsletterInput, auth : authPayload): Promise<UnsubscribeFromNewsletterPayload> {
    try {
      // Define your GraphQL mutation for unsubscribing from a newsletter
      const graphqlMutation = `
        mutation UnsubscribeFromNewsletter($input: UnsubscribeFromNewsletterInput!) {
          unsubscribeFromNewsletter(input: $input) {
            status
          }
        }
      `;

      // Make the API request using the apiUtils module
      const response  : any = await apiUtils.post(auth, { query: graphqlMutation, variables: { input } });

      // Extract and return the relevant data from the response
      return response.data.data.unsubscribeFromNewsletter;
    } catch (error) {
      // Handle errors appropriately
      console.error('Error during unsubscribeFromNewsletter:', error);
      throw error;
    }
  }
}

// Export the functions for use in other parts of your application
export default new newsletterService();