export class Answer {
    Id: number;
    Content: string;
    AuthorName: string;
    CreatedOn: Date;

    constructor(id: number,
        content: string,
        authorName: string,
        createdOn: Date) {
        this.Id = id;
        this.Content = content;
        this.AuthorName = authorName;
        this.CreatedOn = createdOn;
    }
}