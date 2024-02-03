import { PageInfo } from "./commentModels";
import { Post } from "./postModels";
import { Publication } from "./publicationModels";
import { User } from "./userModels";

export interface Series {
    id: string;
    title: string;
    slug: string;
    coverImage: string | null;
    content: string;
    isPublished: boolean;
    isPremium: boolean;
    isCurated: boolean;
    tags: string[];
    creator: User;
    publications: Publication[];
    posts: Post[];
    createdAt: string;
    updatedAt: string | null;
  }
  
  // Define the Series Edge model for pagination
  export interface SeriesEdge {
    node: Series;
    cursor: string;
  }
  
  // Define the Series Connection model for pagination
  export interface SeriesConnection {
    edges: SeriesEdge[];
    pageInfo: PageInfo;
    totalDocuments: number;
  }
  
  // Define the input fields for filtering Series
  export interface SeriesFilter {
    title?: string;
    isPublished?: boolean;
    isPremium?: boolean;
    isCurated?: boolean;
    tag?: string;
    creatorId?: string;
  }
  
  // Define the input fields for creating or updating a Series
  export interface SeriesInput {
    title: string;
    slug: string;
    coverImage?: string | null;
    content: string;
    isPublished: boolean;
    isPremium: boolean;
    isCurated: boolean;
    tags: string[];
    creatorId: string;
  }
  
  // Define the response after creating or updating a Series
  export interface SeriesResponse {
    success: boolean;
    message: string;
    series?: Series;
  }
  