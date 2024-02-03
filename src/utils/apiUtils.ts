// export const apiUtils = {
//   post: async (auth: any, data: any) => {
//     const { url, API_KEY } = auth;

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


import { GraphQLClient } from 'graphql-request';

export const apiUtils = {
  post: async (auth: any, data: any) => {
    const { url, API_KEY } = auth;

    const client = new GraphQLClient(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`, // Include API key in the Authorization header
      },
    });

    try {
      const response = await client.request(data.query, data.variables);
      return response;
    } catch (error) {
      console.error('GraphQL request error:', error);
      throw error;
    }
  },
};

export default apiUtils;
