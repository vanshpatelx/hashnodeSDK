"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const apiUtils_1 = require("../utils/apiUtils");
class CommentService {
    /**
     * Adds a comment to a post.
     * @param {AddCommentInput} input - The input data for adding a comment.
     * @returns {Promise<AddCommentPayload>} - The response indicating the success or failure of adding a comment.
     */
    addComment(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield apiUtils_1.apiUtils.post(auth, { query: graphqlMutation, variables: { input } });
                return response.data.data.addComment;
            }
            catch (error) {
                console.error('Error during addComment:', error);
                throw error;
            }
        });
    }
    /**
     * Likes a comment.
     * @param {LikeCommentInput} input - The input data for liking a comment.
     * @returns {Promise<LikeCommentPayload>} - The response indicating the success or failure of liking a comment.
     */
    likeComment(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield apiUtils_1.apiUtils.post(auth, { query: graphqlMutation, variables: { input } });
                return response.data.data.likeComment;
            }
            catch (error) {
                console.error('Error during likeComment:', error);
                throw error;
            }
        });
    }
    /**
     * Updates a comment on a post.
     * @param {UpdateCommentInput} input - The input data for updating a comment.
     * @returns {Promise<UpdateCommentPayload>} - The response indicating the success or failure of updating a comment.
     */
    updateComment(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield apiUtils_1.apiUtils.post(auth, { query: graphqlMutation, variables: { input } });
                return response.data.data.updateComment;
            }
            catch (error) {
                console.error('Error during updateComment:', error);
                throw error;
            }
        });
    }
}
exports.CommentService = CommentService;
// Export the CommentService for use in other parts of your application
exports.default = new CommentService();
