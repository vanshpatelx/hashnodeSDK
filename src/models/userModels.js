"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAuthorType = exports.UserPublicationRole = void 0;
// Define the UserPublicationRole enum
var UserPublicationRole;
(function (UserPublicationRole) {
    UserPublicationRole["OWNER"] = "OWNER";
    UserPublicationRole["EDITOR"] = "EDITOR";
    UserPublicationRole["CONTRIBUTOR"] = "CONTRIBUTOR";
})(UserPublicationRole || (exports.UserPublicationRole = UserPublicationRole = {}));
var PostAuthorType;
(function (PostAuthorType) {
    PostAuthorType["AUTHOR"] = "AUTHOR";
    PostAuthorType["CO_AUTHOR"] = "CO_AUTHOR";
})(PostAuthorType || (exports.PostAuthorType = PostAuthorType = {}));
