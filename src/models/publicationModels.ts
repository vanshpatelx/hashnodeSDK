import { Tag } from "./TagModels";
import { PageInfo } from "./postModels";
import { User, UserConnection } from "./userModels";

// Define the Publication model
export interface Publication {
    id: string;
    title: string;
    description: string;
    tags: Tag[];
    owner: User;
    editors: UserConnection;
    contributors: UserConnection;
    createdAt: string;
    updatedAt?: string;
    isPublished: boolean;
  }
  
  // Define the PublicationConnection model for pagination
  export interface PublicationConnection {
    edges: PublicationEdge[];
    pageInfo: PageInfo;
    totalDocuments: number;
  }
  
  // Define the PublicationEdge model for pagination
  export interface PublicationEdge {
    node: Publication;
    cursor: string;
  }
  