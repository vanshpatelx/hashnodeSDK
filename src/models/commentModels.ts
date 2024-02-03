// commentModels.ts

import { Post } from "./postModels";
import { User } from "./userModels";

// Interface for AddCommentInput
export interface AddCommentInput {
    postId: string; // ID of the post to which the comment is added
    contentMarkdown: string; // Markdown content of the comment
  }
  
  // Interface for the response payload when adding a comment
  export interface AddCommentPayload {
    comment: Comment; // Comment object representing the added comment
  }
  
  // Interface for LikeCommentInput
  export interface LikeCommentInput {
    input: LikeCommentInput; // Input data for liking a comment
  }
  
  // Interface for the response payload when liking a comment
  export interface LikeCommentPayload {
    comment: Comment; // Comment object representing the liked comment
  }
  
  // Interface for UpdateCommentInput
  export interface UpdateCommentInput {
    input: UpdateCommentInput; // Input data for updating a comment
  }
  
  // Interface for the response payload when updating a comment
  export interface UpdateCommentPayload {
    comment: Comment; // Comment object representing the updated comment
  }
  
  export interface Comment {
    id: string;
    content: string;
    post: Post;
    user: User;
    createdAt: string;
    updatedAt?: string;
  }
  export interface CommentConnection {
    edges: CommentEdge[];
    pageInfo: PageInfo;
    totalDocuments: number;
  }

  // Define the CommentEdge model for pagination
  export interface CommentEdge {
    node: Comment;
    cursor: string;
  }
  

  export interface PostCommenterConnection {
    edges: PostCommenterEdge[];
    pageInfo: PageInfo;
    totalDocuments: number;
  }

    
  export interface PostCommenterEdge {
    node: User;
    cursor: string;
  }

  export interface PostCommentEdge {
    node: Comment;
    cursor: string;
  }

  export interface PostCommentConnection{
    edges : PostCommentEdge;
    pageInfo : PageInfo;
    totalDocuments: number;
  }

  export interface PageInfo {
    hasNextPage: boolean;
    endCursor?: string;
  }
  


  