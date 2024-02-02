// src/hashnodeSdk.js
const { GraphQLClient } = require('graphql-request');

class HashnodeSDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://gql.hashnode.com/';
    this.client = new GraphQLClient(this.baseUrl, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }

  async makeRequest(query) {
    try {
      const response = await this.client.request(query);
      return response;
    } catch (error) {
      throw new Error(`Hashnode API request failed: ${error.message}`);
    }
  }

  async getPublicationDetails(host) {
    const query = `
      query Publication {
        publication(host: "${host}") {
          isTeam
          title
          about {
            markdown
          }
        }
      }
    `;
    return this.makeRequest(query);
  }

  async getBlogPosts(host, first = 10) {
    const query = `
      query Publication {
        publication(host: "${host}") {
          isTeam
          title
          posts(first: ${first}) {
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
    return this.makeRequest(query);
  }

  async getSingleArticle(host, articleSlug) {
    const query = `
      query Publication {
        publication(host: "${host}") {
          isTeam
          title
          post(slug: "${articleSlug}") {
            title
            content {
              markdown
              html
            }
          }
        }
      }
    `;
    return this.makeRequest(query);
  }

  async getPostsFromSeries(host, seriesSlug, first = 10) {
    const query = `
      query Publication {
        publication(host: "${host}") {
          isTeam
          title
          series(slug: "${seriesSlug}") {
            posts(first: ${first}) {
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
    return this.makeRequest(query);
  }

  async getStaticPages(host, first = 10) {
    const query = `
      query Publication {
        publication(host: "${host}") {
          isTeam
          title
          staticPages(first: ${first}) {
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
    return this.makeRequest(query);
  }

  async getSingleStaticPage(host, pageSlug) {
    const query = `
      query Publication {
        publication(host: "${host}") {
          isTeam
          title
          staticPage(slug: "${pageSlug}") {
            title
            content {
              markdown
            }
          }
        }
      }
    `;
    return this.makeRequest(query);
  }
}

module.exports = HashnodeSDK;
