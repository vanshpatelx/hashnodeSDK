"use strict";
// export const apiUtils = {
//   post: async (auth: any, data: any) => {
//     const { url, API_KEY } = auth;
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
exports.apiUtils = void 0;
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${API_KEY}`, // Include API key in the Authorization header
//         },
//         body: JSON.stringify(data),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('API request error:', error);
//       throw error;
//     }
//   },
// };
// export default apiUtils;
const graphql_request_1 = require("graphql-request");
exports.apiUtils = {
    post: (auth, data) => __awaiter(void 0, void 0, void 0, function* () {
        const { url, API_KEY } = auth;
        const client = new graphql_request_1.GraphQLClient(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${API_KEY}`, // Include API key in the Authorization header
            },
        });
        try {
            const response = yield client.request(data.query, data.variables);
            return response;
        }
        catch (error) {
            console.error('GraphQL request error:', error);
            throw error;
        }
    }),
};
exports.default = exports.apiUtils;
