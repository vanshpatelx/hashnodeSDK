// Import necessary modules, types, and utility functions
import { AddCommentInput, AddCommentPayload, LikeCommentInput, LikeCommentPayload, UpdateCommentInput, UpdateCommentPayload } from '../models/commentModels';
import { authPayload } from '../models/authModels';
import { apiUtils } from '../utils/apiUtils';

export class CommentService {
  /**
   * Adds a comment to a post.
   * @param {AddCommentInput} input - The input data for adding a comment.
   * @returns {Promise<AddCommentPayload>} - The response indicating the success or failure of adding a comment.
   */
  async addComment(input: AddCommentInput, auth: authPayload): Promise<AddCommentPayload> {
    try {
      const graphqlMutation = `
        mutation AddComment($input: AddCommentInput!) {
          addComment(input: $input) {
            comment {
              id
              // Add more fields if needed
            }
          }
        }
      `;

      const response : any  = await apiUtils.post(auth, { query: graphqlMutation, variables: { input } });

      return response.data.data.addComment;
    } catch (error) {
      console.error('Error during addComment:', error);
      throw error;
    }
  }

  /**
   * Likes a comment.
   * @param {LikeCommentInput} input - The input data for liking a comment.
   * @returns {Promise<LikeCommentPayload>} - The response indicating the success or failure of liking a comment.
   */
  async likeComment(input: LikeCommentInput, auth: authPayload): Promise<LikeCommentPayload> {
    try {
      const graphqlMutation = `
        mutation LikeComment($input: LikeCommentInput!) {
          likeComment(input: $input) {
            comment {
              id
              // Add more fields if needed
            }
          }
        }
      `;

      const response  : any = await apiUtils.post(auth, { query: graphqlMutation, variables: { input } });

      return response.data.data.likeComment;
    } catch (error) {
      console.error('Error during likeComment:', error);
      throw error;
    }
  }

  /**
   * Updates a comment on a post.
   * @param {UpdateCommentInput} input - The input data for updating a comment.
   * @returns {Promise<UpdateCommentPayload>} - The response indicating the success or failure of updating a comment.
   */
  async updateComment(input: UpdateCommentInput, auth: authPayload): Promise<UpdateCommentPayload> {
    try {
      const graphqlMutation = `
        mutation UpdateComment($input: UpdateCommentInput!) {
          updateComment(input: $input) {
            comment {
              id
              // Add more fields if needed
            }
          }
        }
      `;

      const response  : any = await apiUtils.post(auth, { query: graphqlMutation, variables: { input } });

      return response.data.data.updateComment;
    } catch (error) {
      console.error('Error during updateComment:', error);
      throw error;
    }
  }
}

// Export the CommentService for use in other parts of your application
export default new CommentService();
