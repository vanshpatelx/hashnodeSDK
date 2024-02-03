// newsletterModels.ts
// import { PageInfo } from './paginationModels';
// import { Publication } from './publicationModels';
// import { User, UserConnection } from './userModels';

// Define the Newsletter model
// export interface Newsletter {
//     id: string;
//     name: string;
//     description: string;
//     createdAt: string;
//     updatedAt?: string;
//     isPublished: boolean;
//     publication: Publication;
//     owner: User;
//     subscribers: UserConnection;
// }
  
  // Define the NewsletterConnection model for pagination
//   export interface NewsletterConnection {
//     edges: NewsletterEdge[];
//     pageInfo: PageInfo;
//     totalDocuments: number;
//   }
  
//   // Define the NewsletterEdge model for pagination
//   export interface NewsletterEdge {
//     node: Newsletter;
//     cursor: string;
//   }


  // Define the SubscribeToNewsletterInput interface
export interface SubscribeToNewsletterInput {
  publicationId: string; // The ID of the publication to subscribe to.
  email: string; // The email of the subscriber.
}

// Define the SubscribeToNewsletterPayload interface
export interface SubscribeToNewsletterPayload {
  status: string; // The status of the subscription.
}

// Define the UnsubscribeFromNewsletterInput interface
export interface UnsubscribeFromNewsletterInput {
  publicationId: string; // The ID of the publication to unsubscribe from.
  email: string; // The email that is currently subscribed.
}

// Define the UnsubscribeFromNewsletterPayload interface
export interface UnsubscribeFromNewsletterPayload {
  status: string; // The status of the unsubscription.
}

// // Define the NewsletterSubscribeStatus enum
// export enum NewsletterSubscribeStatus {
//   PENDING = 'PENDING',
//   // Add more status values based on your requirements
// }

// // Define the NewsletterUnsubscribeStatus enum
// export enum NewsletterUnsubscribeStatus {
//   UNSUBSCRIBED = 'UNSUBSCRIBED',
//   // Add more status values based on your requirements
// }

  