// Import necessary modules, types, and utility functions
import { authPayload } from "../models/authModels";
import {
  PublishPostInput,
  PublishPostPayload,
  UpdatePostInput,
  UpdatePostPayload,
  LikePostInput,
  LikePostPayload,
  RemovePostInput,
  RemovePostPayload,
  PostServiceResponse,
} from "../models/postModels";
import { apiUtils } from "../utils/apiUtils";

export class PostService {
  /**
   * Publish a new post.
   * @param {PublishPostInput} input - The input data for publishing a post.
   * @param {authPayload} auth - The authentication payload.
   * @returns {Promise<PublishPostPayload>} - The response indicating the success or failure of post publication.
   */
  async publishPost(
    input: PublishPostInput,
    auth: authPayload
  ): Promise<PublishPostPayload> {
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
      const response: any = await apiUtils.post(auth, {
        query: graphqlMutation,
        variables: { input },
      });

      // Extract and return the relevant data from the response
      return response;
    } catch (error) {
      // Handle errors appropriately
      console.error("Error during publishPost:", error);
      throw error;
    }
  }

  /**
   * Update an existing post.
   * @param {UpdatePostInput} input - The input data for updating a post.
   * @param {authPayload} auth - The authentication payload.
   * @returns {Promise<UpdatePostPayload>} - The response indicating the success or failure of post update.
   */
  async updatePost(
    input: UpdatePostInput,
    auth: authPayload
  ): Promise<UpdatePostPayload> {
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
      const response: any = await apiUtils.post(auth, {
        query: graphqlMutation,
        variables: { input },
      });

      // Extract and return the relevant data from the response
      return response;
    } catch (error) {
      // Handle errors appropriately
      console.error("Error during updatePost:", error);
      throw error;
    }
  }

  /**
   * Like a post.
   * @param {LikePostInput} input - The input data for liking a post.
   * @param {authPayload} auth - The authentication payload.
   * @returns {Promise<LikePostPayload>} - The response indicating the success or failure of liking the post.
   */
  async likePost(
    input: LikePostInput,
    auth: authPayload
  ): Promise<LikePostPayload> {
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
      const response: any = await apiUtils.post(auth, {
        query: graphqlMutation,
        variables: { input },
      });

      // Extract and return the relevant data from the response
      return response;
    } catch (error) {
      // Handle errors appropriately
      console.error("Error during likePost:", error);
      throw error;
    }
  }

  /**
   * Remove a post.
   * @param {RemovePostInput} input - The input data for removing a post.
   * @param {authPayload} auth - The authentication payload.
   * @returns {Promise<RemovePostPayload>} - The response indicating the success or failure of post removal.
   */
  async removePost(
    input: RemovePostInput,
    auth: authPayload
  ): Promise<RemovePostPayload> {
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
      const response: any = await apiUtils.post(auth, {
        query: graphqlMutation,
        variables: { input },
      });

      // Extract and return the relevant data from the response
      return response;
    } catch (error) {
      // Handle errors appropriately
      console.error("Error during removePost:", error);
      throw error;
    }
  }

  /**
   * Fetch details about a publication.
   * @param {string} host - The hostname of the publication.
   * @returns {Promise<PostServiceResponse>} - The response containing details about the publication.
   */
  async fetchPublicationDetails(
    host: string,
    auth: authPayload
  ): Promise<PostServiceResponse> {
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

    const response: any = await apiUtils.post(auth, {
      query: graphqlQuery,
      variables: { host }, // Use the GraphQL variable
    });
    return response;
  }

  /**
   * Fetch posts from a publication.
   * @param {string} host - The hostname of the publication.
   * @param {number} first - The number of posts to fetch.
   * @returns {Promise<PostServiceResponse>} - The response containing posts from the publication.
   */
  async fetchPosts(
    host: string,
    first: number = 10,
    auth: authPayload
  ): Promise<PostServiceResponse> {
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

    const response: any = await apiUtils.post(auth, {
      query: graphqlQuery,
      variables: { host, first },
    });
    return response;
  }

  /**
   * Fetch a single post from a publication.
   * @param {string} host - The hostname of the publication.
   * @param {string} slug - The slug of the post.
   * @returns {Promise<PostServiceResponse>} - The response containing a single post from the publication.
   */
  async fetchPost(
    host: string,
    slug: string,
    auth: authPayload
  ): Promise<PostServiceResponse> {
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

    const response: any = await apiUtils.post(auth, {
      query: graphqlQuery,
      variables: { host, slug },
    });
    return response;
  }

  /**
   * Fetch posts from a series in a publication.
   * @param {string} host - The hostname of the publication.
   * @param {string} seriesSlug - The slug of the series.
   * @param {number} first - The number of series posts to fetch.
   * @returns {Promise<PostServiceResponse>} - The response containing posts from the series in the publication.
   */
  async fetchSeriesPosts(
    host: string,
    seriesSlug: string,
    first: number = 10,
    auth: authPayload
  ): Promise<PostServiceResponse> {
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

    const response: any = await apiUtils.post(auth, {
      query: graphqlQuery,
      variables: { host, seriesSlug, first },
    });
    return response;
  }

  /**
   * Fetch static pages from a publication.
   * @param {string} host - The hostname of the publication.
   * @param {number} first - The number of static pages to fetch.
   * @returns {Promise<PostServiceResponse>} - The response containing static pages from the publication.
   */
  async fetchStaticPages(
    host: string,
    first: number = 10,
    auth: authPayload
  ): Promise<PostServiceResponse> {
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

    const response: any = await apiUtils.post(auth, {
      query: graphqlQuery,
      variables: { host, first },
    });
    console.log(response);
    return response;
  }

  /**
   * Fetch a single static page from a publication.
   * @param {string} host - The hostname of the publication.
   * @param {string} slug - The slug of the static page.
   * @returns {Promise<PostServiceResponse>} - The response containing a single static page from the publication.
   */
  async fetchStaticPage(
    host: string,
    slug: string,
    auth: authPayload
  ): Promise<PostServiceResponse> {
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


    const response: any = await apiUtils.post(auth, {
      query: graphqlQuery,
      variables: { host, slug },
    });
    return response;
  }
}

// Export the functions for use in other parts of your application
export default new PostService();
