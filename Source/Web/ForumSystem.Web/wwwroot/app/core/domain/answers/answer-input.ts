export class AnswerInput {
    Content: string;
    AuthorName: string;
    PostId: number;

    constructor(content: string,
        authorName: string,
        postId: number) {
        this.Content = content;
        this.AuthorName = authorName;
        this.PostId = postId;
    }
}