import { Tag } from "./TagModels";
import { Content, PageInfo, Post } from "./postModels";
import { Publication } from "./publicationModels";

// Define the User model
export interface User {
    id: number;
    username: string;
    name: string;
    bio?: Content;
    // bioV2?: Content; // Deprecated, use bio instead
    profilePicture?: string;
    socialMediaLinks?: SocialMediaLinks;
    badges: Badge[];
    publications: UserPublicationsConnection;
    posts: UserPostConnection;
    followersCount: number;
    followingsCount: number;
    tagline?: string;
    dateJoined?: string;
    location?: string;
    availableFor?: string;
    tagsFollowing: Tag[];
    // ambassador: boolean; // Deprecated
    deactivated: boolean;
    following: boolean;
    followsBack: boolean;
    isPro: boolean;
    followers: UserConnection;
    follows: UserConnection;
  }
  
  // Define the SocialMediaLinks model
export interface SocialMediaLinks {
    website?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    stackoverflow?: string;
    linkedin?: string;
    youtube?: string;
  }


  // Define the Badge model
export interface Badge {
    id: string;
    name: string;
    description?: string;
    image: string;
    dateAssigned?: string;
    infoURL?: string;
    suppressed?: boolean;
  }
  

  // Define the UserPublicationsConnection model for pagination
export interface UserPublicationsConnection {
    edges: UserPublicationsEdge[];
    pageInfo: PageInfo;
    totalDocuments: number;
  }



// Define the UserPublicationsEdge model for pagination
export interface UserPublicationsEdge {
    node: Publication;
    cursor: string;
    role: UserPublicationRole;
  }
  
  // Define the UserPublicationRole enum
  export enum UserPublicationRole {
    OWNER = "OWNER",
    EDITOR = "EDITOR",
    CONTRIBUTOR = "CONTRIBUTOR",
  }


  // Define the UserPostConnection model for pagination
export interface UserPostConnection {
    edges: UserPostEdge[];
    nodes: Post[];
    pageInfo: PageInfo;
    totalDocuments: number;
  }
  
  // Define the UserPostEdge model for pagination
  export interface UserPostEdge {
    node: Post;
    authorType: PostAuthorType;
  }
  


export enum PostAuthorType {
    AUTHOR = 'AUTHOR',
    CO_AUTHOR = 'CO_AUTHOR'
  }
  
  // Define the UserConnection model for pagination
export interface UserConnection {
    nodes: User[];
    pageInfo: PageInfo;
    totalDocuments: number;
  }