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
exports.FollowService = void 0;
const apiUtils_1 = require("../utils/apiUtils");
class FollowService {
    /**
     * Toggle follow state for a user.
     * @param {ToggleFollowUserInput} input - The input data for toggling the follow state.
     * @param {authPayload} auth - The authentication payload for the authenticated user.
     * @returns {Promise<ToggleFollowUserPayload>} - The response indicating the success or failure of toggling the follow state.
     */
    toggleFollowUser(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield apiUtils_1.apiUtils.post(auth, { query: graphqlMutation, variables: { input } });
                // Extract and return the relevant data from the response
                return response.data.data.toggleFollowUser;
            }
            catch (error) {
                // Handle errors appropriately
                console.error('Error during toggleFollowUser:', error);
                throw error;
            }
        });
    }
}
exports.FollowService = FollowService;
exports.default = new FollowService();
