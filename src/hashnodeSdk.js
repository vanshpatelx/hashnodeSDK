"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commentService_1 = __importDefault(require("./endpoints/commentService"));
const followService_1 = __importDefault(require("./endpoints/followService"));
const newsletterService_1 = __importDefault(require("./endpoints/newsletterService"));
const postService_1 = __importDefault(require("./endpoints/postService"));
class HashNodeSDK {
    constructor(url, API_KEY) {
        this.auth = {
            url: url,
            API_KEY: API_KEY,
        };
    }
    subscribeToNewsletter(input, auth) {
        return newsletterService_1.default.subscribeToNewsletter(input, auth);
    }
    unsubscribeFromNewsletter(input, auth) {
        return newsletterService_1.default.unsubscribeFromNewsletter(input, auth);
    }
    addComment(input, auth) {
        return commentService_1.default.addComment(input, auth);
    }
    likeComment(input, auth) {
        return commentService_1.default.likeComment(input, auth);
    }
    updateComment(input, auth) {
        return commentService_1.default.updateComment(input, auth);
    }
    toggleFollowUser(input, auth) {
        return followService_1.default.toggleFollowUser(input, auth);
    }
    publishPost(input) {
        return postService_1.default.publishPost(input, this.auth);
    }
    updatePost(input) {
        return postService_1.default.updatePost(input, this.auth);
    }
    likePost(input) {
        return postService_1.default.likePost(input, this.auth);
    }
    removePost(input) {
        return postService_1.default.removePost(input, this.auth);
    }
    fetchPublicationDetails(host) {
        return postService_1.default.fetchPublicationDetails(host, this.auth);
    }
    fetchPosts(host, first) {
        return postService_1.default.fetchPosts(host, first, this.auth);
    }
    fetchPost(host, slug) {
        return postService_1.default.fetchPost(host, slug, this.auth);
    }
    fetchSeriesPosts(host, seriesSlug, first) {
        return postService_1.default.fetchSeriesPosts(host, seriesSlug, first, this.auth);
    }
    fetchStaticPages(host, first) {
        return postService_1.default.fetchStaticPages(host, first, this.auth);
    }
    fetchStaticPage(host, slug) {
        return postService_1.default.fetchStaticPage(host, slug, this.auth);
    }
}
exports.default = HashNodeSDK;
