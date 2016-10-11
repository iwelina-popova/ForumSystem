export class Feedback {
    Title: string;
    Content: string;
    AuthorName: string;

    constructor(title: string,
        content: string,
        authorName: string) {
        this.Title = title;
        this.Content = content;
        this.AuthorName = authorName;
    }
}