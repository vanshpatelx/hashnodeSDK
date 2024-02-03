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
exports.newsletterService = void 0;
const apiUtils_1 = require("../utils/apiUtils");
class newsletterService {
    /**
     * Subscribe to a newsletter.
     * @param {SubscribeToNewsletterInput} input - The input data for subscribing to a newsletter.
     * @returns {Promise<SubscribeToNewsletterPayload>} - The response indicating the success or failure of the subscription.
     */
    subscribeToNewsletter(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield apiUtils_1.apiUtils.post(auth, { query: graphqlMutation, variables: { input } });
                // Extract and return the relevant data from the response
                return response.data.data.subscribeToNewsletter;
            }
            catch (error) {
                // Handle errors appropriately
                console.error('Error during subscribeToNewsletter:', error);
                throw error;
            }
        });
    }
    /**
     * Unsubscribe from a newsletter.
     * @param {UnsubscribeFromNewsletterInput} input - The input data for unsubscribing from a newsletter.
     * @returns {Promise<UnsubscribeFromNewsletterPayload>} - The response indicating the success or failure of the unsubscription.
     */
    unsubscribeFromNewsletter(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const response = yield apiUtils_1.apiUtils.post(auth, { query: graphqlMutation, variables: { input } });
                // Extract and return the relevant data from the response
                return response.data.data.unsubscribeFromNewsletter;
            }
            catch (error) {
                // Handle errors appropriately
                console.error('Error during unsubscribeFromNewsletter:', error);
                throw error;
            }
        });
    }
}
exports.newsletterService = newsletterService;
// Export the functions for use in other parts of your application
exports.default = new newsletterService();
