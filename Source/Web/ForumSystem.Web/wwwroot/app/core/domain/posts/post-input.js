"use strict";
var InputPost = (function () {
    function InputPost(id, title, content, authorId, tags) {
        this.Title = title;
        this.Content = content;
        this.AuthorId = authorId;
        this.Tags = tags;
    }
    return InputPost;
}());
exports.InputPost = InputPost;
//# sourceMappingURL=post-input.js.map