"use strict";
var Post = (function () {
    function Post(id, title, content, authorName, createdOn, tags, answers, votes) {
        this.Id = id;
        this.Title = title;
        this.Content = content;
        this.AuthorName = authorName;
        this.CreatedOn = createdOn;
        this.Tags = tags;
        this.Answers = answers;
        this.Votes = votes;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map