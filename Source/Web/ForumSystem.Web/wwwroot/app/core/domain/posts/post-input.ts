import { Tag } from '../tag';

export class InputPost {
    Title: string;
    Content: string;
    AuthorId: string;
    Tags: Array<Tag>;

    constructor(id: number,
        title: string,
        content: string,
        authorId: string,
        tags: Array<Tag>) {
        this.Title = title;
        this.Content = content;
        this.AuthorId = authorId;
        this.Tags = tags;
    }
}