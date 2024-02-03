// postModels.ts

import { Tag } from "./TagModels";
import { PostCommentConnection, PostCommenterConnection } from "./commentModels";
import { Publication } from "./publicationModels";
import { Series } from "./seriesModels";
import { User } from "./userModels";

// Interface for PublishPostInput
export interface PublishPostInput {
    title: string;
    subtitle?: string;
    publicationId: string;
    contentMarkdown: string;
    publishedAt: string;
    coverImageOptions: CoverImageOptionsInput;
    slug?: string;
    originalArticleURL?: string;
    tags: PublishPostTagInput[];
    disableComments?: boolean;
    metaTags: MetaTagsInput;
    publishAs?: string;
    seriesId?: string;
    settings: PublishPostSettingsInput;
    coAuthors: string[];
  }
  
  // Interface for CoverImageOptionsInput
  export interface CoverImageOptionsInput {
    coverImageURL: string;
    isCoverAttributionHidden: boolean;
    coverImageAttribution: string;
    coverImagePhotographer: string;
    stickCoverToBottom: boolean;
  }
  
  // Interface for PublishPostTagInput
  export interface PublishPostTagInput {
    id?: string;
    slug?: string;
    name?: string;
  }
  
  // Interface for MetaTagsInput
  export interface MetaTagsInput {
    title: string;
    description: string;
    image: string;
  }
  
  // Interface for PublishPostSettingsInput
  export interface PublishPostSettingsInput {
    scheduled: boolean;
    enableTableOfContent: boolean;
    slugOverridden: boolean;
    isNewsletterActivated: boolean;
    delisted: boolean;
  }
  
  // Interface for PublishPostPayload
  export interface PublishPostPayload {
    post: Post;
  }
  
  // Interface for UpdatePostInput
  export interface UpdatePostInput {
    id: string;
    title?: string;
    subtitle?: string;
    contentMarkdown?: string;
    publishedAt?: string;
    coverImageOptions?: CoverImageOptionsInput;
    slug?: string;
    originalArticleURL?: string;
    tags?: PublishPostTagInput[];
    metaTags?: MetaTagsInput;
    publishAs?: string;
    coAuthors?: string[];
    seriesId?: string;
    settings?: UpdatePostSettingsInput;
    publicationId?: string;
  }
  
  // Interface for UpdatePostSettingsInput
  export interface UpdatePostSettingsInput {
    isTableOfContentEnabled?: boolean;
    delisted?: boolean;
    disableComments?: boolean;
    pinToBlog?: boolean;
  }
  
  // Interface for UpdatePostPayload
  export interface UpdatePostPayload {
    post: Post;
  }
  
  // Interface for LikePostInput
  export interface LikePostInput {
    postId: string;
    likesCount: number;
  }
  
  // Interface for LikePostPayload
  export interface LikePostPayload {
    post: Post;
  }
  
  // Interface for RemovePostInput
  export interface RemovePostInput {
    id: string;
  }
  
  // Interface for RemovePostPayload
  export interface RemovePostPayload {
    post: Post;
  }
  
  
  export interface Post {
    id: string;
    slug: string;
    title: string;
    subtitle?: string;
    author: User; // Assuming there is a User interface or type
    coAuthors?: User[]; // Assuming there is a User interface or type
    tags: Tag[]; // Assuming there is a Tag interface or type
    url: string;
    canonicalUrl?: string;
    publication: Publication; // Assuming there is a Publication interface or type
    cuid: string;
    coverImage: PostCoverImage; // Assuming there is a PostCoverImage interface or type
    brief: string;
    readTimeInMinutes: number;
    views: number;
    series?: Series; // Assuming there is a Series interface or type
    reactionCount: number;
    replyCount: number;
    responseCount: number;
    featured: boolean;
    contributors: User[];
    commenters: PostCommenterConnection;
    comments: PostCommentConnection;
    bookmarked: boolean;
    content: Content;
    likedBy: PostLikerConnection;
    featuredAt?: string; // Assuming it's a date-time string
    publishedAt: string; // Assuming it's a date-time string
    updatedAt?: string; // Assuming it's a date-time string
    preferences: PostPreferences;
    audioUrls?: AudioUrls;
    seo: SEO;
    ogMetaData: OpenGraphMetaData;
    hasLatexInPost: boolean;
    isFollowed?: boolean;
    isAutoPublishedFromRSS: boolean;
    features: PostFeatures;
  }

  export interface PostCoverImage {
    url: string;
    isPortrait: boolean;
    attribution?: string;
    photographer?: string;
    isAttributionHidden: boolean;
  }
  

  export interface Content {
    markdown: string;
    html: string;
    text: string;
  }
  
  export interface PageInfo {
    hasNextPage: boolean;
    endCursor?: string;
  }
  
  export interface PostLikerConnection {
    edges: PostLikerEdge[];
    pageInfo: PageInfo;
    totalDocuments: number;
  }
  
  export interface PostLikerEdge {
    node: User;
    cursor: string;
    reactionCount: number;
  }
  
  export interface PostPreferences {
    pinnedToBlog: boolean;
    disableComments: boolean;
    stickCoverToBottom: boolean;
    isDelisted: boolean;
  }
  
  export interface AudioUrls {
    male: string;
    female: string;
  }
  
  export interface SEO {
    title: string;
    description: string;
  }
  
  export interface OpenGraphMetaData {
    image: string;
  }
  
  export interface PostFeatures {
    tableOfContents: TableOfContentsFeature;
    badges: PostBadgesFeature;
  }
  
  export interface TableOfContentsFeature {
    isEnabled: boolean;
    items: TableOfContentsItem[];
  }
  
  export interface TableOfContentsItem {
    id: string;
    level: number;
    slug: string;
    title: string;
    parentId: string | null;
  }
  
  export interface PostBadgesFeature {
    isEnabled: boolean;
    items: PostBadge[];
  }
  
  export interface PostBadge {
    id: string;
    type: PostBadgeType;
  }
  
  export enum PostBadgeType {
    FEATURED_HASHNODE = 'FEATURED_HASHNODE',
    FEATURED_DAILY_DOT_DEV = 'FEATURED_DAILY_DOT_DEV',
  }



  export interface PostServiceResponse {
    post?: Post;
    publication?: Publication;
  }
  