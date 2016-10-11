"use strict";
var AdminPost = (function () {
    function AdminPost(id, title, content, authorName, createdOn, modifiedOn, isDeleted) {
        this.Id = id;
        this.Title = title;
        this.Content = content;
        this.AuthorName = authorName;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
        this.IsDeleted = isDeleted;
    }
    return AdminPost;
}());
exports.AdminPost = AdminPost;
//# sourceMappingURL=admin-post.js.map