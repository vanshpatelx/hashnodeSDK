// Import the HashNodeSDK and necessary types
import HashNodeSDK from "./hashnodeSDK";
import { PostServiceResponse } from "./models/postModels";

// Initialize the HashNodeSDK with your API key and URL
const hashNodeSDK = new HashNodeSDK(
  "https://gql.hashnode.com/graphql",
  "30427802-5cf8-4296-a41f-e9f7c1648eeb"
);

// Example usage for fetching publication details
const hostPublicationDetails = "lo-victoria.com";

hashNodeSDK
  .fetchPublicationDetails(hostPublicationDetails)
  .then((response: PostServiceResponse) => {
    // Handle the response
    console.log("Fetch Publication Details Response:", response);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error during fetchPublicationDetails:", error);
  });

// Example usage for fetching posts from a blog
const hostFetchPosts = "blog.developerdao.com";
const firstFetchPosts = 10;

hashNodeSDK
  .fetchPosts(hostFetchPosts, firstFetchPosts)
  .then((response: PostServiceResponse) => {
    // Handle the response
    console.log("Fetch Posts Response:", response);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error during fetchPosts:", error);
  });