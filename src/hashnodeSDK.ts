import commentService from "./endpoints/commentService";
import FollowService from "./endpoints/followService";
import newsletterService from "./endpoints/newsletterService";
import postService from "./endpoints/postService";
import { authPayload } from "./models/authModels";
import {
  AddCommentInput,
  AddCommentPayload,
  LikeCommentInput,
  LikeCommentPayload,
  UpdateCommentInput,
  UpdateCommentPayload,
} from "./models/commentModels";
import {
  ToggleFollowUserInput,
  ToggleFollowUserPayload,
} from "./models/followModels";
import {
  SubscribeToNewsletterInput,
  SubscribeToNewsletterPayload,
  UnsubscribeFromNewsletterInput,
  UnsubscribeFromNewsletterPayload,
} from "./models/newsletterModels";
import {
  LikePostInput,
  LikePostPayload,
  PostServiceResponse,
  PublishPostInput,
  PublishPostPayload,
  RemovePostInput,
  RemovePostPayload,
  UpdatePostInput,
  UpdatePostPayload,
} from "./models/postModels";

class HashNodeSDK {
  protected auth: authPayload;

  constructor(url: string, API_KEY: string) {
    this.auth = {
      url: url,
      API_KEY: API_KEY,
    };
  }

  public subscribeToNewsletter(
    input: SubscribeToNewsletterInput,
    auth: authPayload
  ): Promise<SubscribeToNewsletterPayload> {
    return newsletterService.subscribeToNewsletter(input, auth);
  }

  public unsubscribeFromNewsletter(
    input: UnsubscribeFromNewsletterInput,
    auth: authPayload
  ): Promise<UnsubscribeFromNewsletterPayload> {
    return newsletterService.unsubscribeFromNewsletter(input, auth);
  }

  public addComment(
    input: AddCommentInput,
    auth: authPayload
  ): Promise<AddCommentPayload> {
    return commentService.addComment(input, auth);
  }

  public likeComment(
    input: LikeCommentInput,
    auth: authPayload
  ): Promise<LikeCommentPayload> {
    return commentService.likeComment(input, auth);
  }

  public updateComment(
    input: UpdateCommentInput,
    auth: authPayload
  ): Promise<UpdateCommentPayload> {
    return commentService.updateComment(input, auth);
  }

  public toggleFollowUser(
    input: ToggleFollowUserInput,
    auth: authPayload
  ): Promise<ToggleFollowUserPayload> {
    return FollowService.toggleFollowUser(input, auth);
  }

  public publishPost(input: PublishPostInput): Promise<PublishPostPayload> {
    return postService.publishPost(input, this.auth);
  }

  public updatePost(input: UpdatePostInput): Promise<UpdatePostPayload> {
    return postService.updatePost(input, this.auth);
  }

  public likePost(input: LikePostInput): Promise<LikePostPayload> {
    return postService.likePost(input, this.auth);
  }

  public removePost(input: RemovePostInput): Promise<RemovePostPayload> {
    return postService.removePost(input, this.auth);
  }

  public fetchPublicationDetails(host: string): Promise<PostServiceResponse> {
    return postService.fetchPublicationDetails(host, this.auth);
  }

  public fetchPosts(host: string, first: number): Promise<PostServiceResponse> {
    return postService.fetchPosts(host, first, this.auth);
  }
  public fetchPost(host: string, slug: string): Promise<PostServiceResponse> {
    return postService.fetchPost(host, slug, this.auth);
  }
  public fetchSeriesPosts(
    host: string,
    seriesSlug: string,
    first: number
  ): Promise<PostServiceResponse> {
    return postService.fetchSeriesPosts(host,seriesSlug, first, this.auth);
  }
  public fetchStaticPages(host: string, first: number): Promise<PostServiceResponse> {
    return postService.fetchStaticPages(host, first, this.auth);
  }
  public fetchStaticPage(host: string, slug: string): Promise<PostServiceResponse> {
    return postService.fetchStaticPage(host, slug, this.auth);
  }
}

export default HashNodeSDK;
