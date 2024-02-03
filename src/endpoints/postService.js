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
exports.PostService = void 0;
const apiUtils_1 = require("../utils/apiUtils");
class PostService {
    /**
     * Publish a new post.
     * @param {PublishPostInput} input - The input data for publishing a post.
     * @param {authPayload} auth - The authentication payload.
     * @returns {Promise<PublishPostPayload>} - The response indicating the success or failure of post publication.
     */
    publishPost(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Define your GraphQL mutation for publishing a post
                const graphqlMutation = `
        mutation PublishPost($input: PublishPostInput!) {
          publishPost(input: $input) {
            post {
              id
              slug
              title
              // other relevant fields
            }
          }
        }
      `;
                // Make the API request using the apiUtils module
                const response = yield apiUtils_1.apiUtils.post(auth, {
                    query: graphqlMutation,
                    variables: { input },
                });
                // Extract and return the relevant data from the response
                return response;
            }
            catch (error) {
                // Handle errors appropriately
                console.error("Error during publishPost:", error);
                throw error;
            }
        });
    }
    /**
     * Update an existing post.
     * @param {UpdatePostInput} input - The input data for updating a post.
     * @param {authPayload} auth - The authentication payload.
     * @returns {Promise<UpdatePostPayload>} - The response indicating the success or failure of post update.
     */
    updatePost(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Define your GraphQL mutation for updating a post
                const graphqlMutation = `
        mutation UpdatePost($input: UpdatePostInput!) {
          updatePost(input: $input) {
            post {
              id
              slug
              title
              // other relevant fields
            }
          }
        }
      `;
                // Make the API request using the apiUtils module
                const response = yield apiUtils_1.apiUtils.post(auth, {
                    query: graphqlMutation,
                    variables: { input },
                });
                // Extract and return the relevant data from the response
                return response;
            }
            catch (error) {
                // Handle errors appropriately
                console.error("Error during updatePost:", error);
                throw error;
            }
        });
    }
    /**
     * Like a post.
     * @param {LikePostInput} input - The input data for liking a post.
     * @param {authPayload} auth - The authentication payload.
     * @returns {Promise<LikePostPayload>} - The response indicating the success or failure of liking the post.
     */
    likePost(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Define your GraphQL mutation for liking a post
                const graphqlMutation = `
        mutation LikePost($input: LikePostInput!) {
          likePost(input: $input) {
            post {
              id
              slug
              title
              // other relevant fields
            }
          }
        }
      `;
                // Make the API request using the apiUtils module
                const response = yield apiUtils_1.apiUtils.post(auth, {
                    query: graphqlMutation,
                    variables: { input },
                });
                // Extract and return the relevant data from the response
                return response;
            }
            catch (error) {
                // Handle errors appropriately
                console.error("Error during likePost:", error);
                throw error;
            }
        });
    }
    /**
     * Remove a post.
     * @param {RemovePostInput} input - The input data for removing a post.
     * @param {authPayload} auth - The authentication payload.
     * @returns {Promise<RemovePostPayload>} - The response indicating the success or failure of post removal.
     */
    removePost(input, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Define your GraphQL mutation for removing a post
                const graphqlMutation = `
        mutation RemovePost($input: RemovePostInput!) {
          removePost(input: $input) {
            post {
              id
              slug
              title
              // other relevant fields
            }
          }
        }
      `;
                // Make the API request using the apiUtils module
                const response = yield apiUtils_1.apiUtils.post(auth, {
                    query: graphqlMutation,
                    variables: { input },
                });
                // Extract and return the relevant data from the response
                return response;
            }
            catch (error) {
                // Handle errors appropriately
                console.error("Error during removePost:", error);
                throw error;
            }
        });
    }
    /**
     * Fetch details about a publication.
     * @param {string} host - The hostname of the publication.
     * @returns {Promise<PostServiceResponse>} - The response containing details about the publication.
     */
    fetchPublicationDetails(host, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const graphqlQuery = `
    query Publication($host: String!) {
      publication(host: $host) {
        isTeam
        title
        about {
          markdown
        }
      }
    }
  `;
            const response = yield apiUtils_1.apiUtils.post(auth, {
                query: graphqlQuery,
                variables: { host }, // Use the GraphQL variable
            });
            return response;
        });
    }
    /**
     * Fetch posts from a publication.
     * @param {string} host - The hostname of the publication.
     * @param {number} first - The number of posts to fetch.
     * @returns {Promise<PostServiceResponse>} - The response containing posts from the publication.
     */
    fetchPosts(host, first = 10, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const graphqlQuery = `
      query Publication($host: String!,$first: Int!) {
        publication(host: $host) {
          isTeam
          title
          posts(first: $first) {
            edges {
              node {
                title
                brief
                url
              }
            }
          }
        }
      }
    `;
            const response = yield apiUtils_1.apiUtils.post(auth, {
                query: graphqlQuery,
                variables: { host, first },
            });
            return response;
        });
    }
    /**
     * Fetch a single post from a publication.
     * @param {string} host - The hostname of the publication.
     * @param {string} slug - The slug of the post.
     * @returns {Promise<PostServiceResponse>} - The response containing a single post from the publication.
     */
    fetchPost(host, slug, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const graphqlQuery = `
  query GetPost($host: String!, $slug: String!) {
    publication(host: $host) {
      isTeam
      title
      post(slug: $slug) {
        title
        content {
          markdown
          html
        }
      }
    }
  }
`;
            const response = yield apiUtils_1.apiUtils.post(auth, {
                query: graphqlQuery,
                variables: { host, slug },
            });
            return response;
        });
    }
    /**
     * Fetch posts from a series in a publication.
     * @param {string} host - The hostname of the publication.
     * @param {string} seriesSlug - The slug of the series.
     * @param {number} first - The number of series posts to fetch.
     * @returns {Promise<PostServiceResponse>} - The response containing posts from the series in the publication.
     */
    fetchSeriesPosts(host, seriesSlug, first = 10, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const graphqlQuery = `
  query GetPublication($host: String!, $seriesSlug: String!, $first: Int!) {
    publication(host: $host) {
      isTeam
      title
      series(slug: $seriesSlug) {
        posts(first: $first) {
          edges {
            node {
              title
            }
          }
        }
      }
    }
  }
`;
            const response = yield apiUtils_1.apiUtils.post(auth, {
                query: graphqlQuery,
                variables: { host, seriesSlug, first },
            });
            return response;
        });
    }
    /**
     * Fetch static pages from a publication.
     * @param {string} host - The hostname of the publication.
     * @param {number} first - The number of static pages to fetch.
     * @returns {Promise<PostServiceResponse>} - The response containing static pages from the publication.
     */
    fetchStaticPages(host, first = 10, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const graphqlQuery = `
  query GetPublication($host: String!, $first: Int!) {
    publication(host: $host) {
      isTeam
      title
      staticPages(first: $first) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  }
`;
            const response = yield apiUtils_1.apiUtils.post(auth, {
                query: graphqlQuery,
                variables: { host, first },
            });
            console.log(response);
            return response;
        });
    }
    /**
     * Fetch a single static page from a publication.
     * @param {string} host - The hostname of the publication.
     * @param {string} slug - The slug of the static page.
     * @returns {Promise<PostServiceResponse>} - The response containing a single static page from the publication.
     */
    fetchStaticPage(host, slug, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const graphqlQuery = `
  query GetPublication($host: String!, $slug: String!) {
    publication(host: $host) {
      isTeam
      title
      staticPage(slug: $slug) {
        title
        content {
          markdown
        }
      }
    }
  }
`;
            const response = yield apiUtils_1.apiUtils.post(auth, {
                query: graphqlQuery,
                variables: { host, slug },
            });
            return response;
        });
    }
}
exports.PostService = PostService;
// Export the functions for use in other parts of your application
exports.default = new PostService();
