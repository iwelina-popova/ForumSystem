import { Tag } from '../tag';
import { Answer } from '../answers/answer';

export class Post {
    Id: number;
    Title: string;
    Content: string;
    AuthorName: string;
    CreatedOn: Date;
    Tags: Array<Tag>;
    Answers: Array<Answer>;
    Votes: number;

    constructor(id: number,
        title: string,
        content: string,
        authorName: string,
        createdOn: Date,
        tags: Array<Tag>,
        answers: Array<Answer>,
        votes: number) {
        this.Id = id;
        this.Title = title;
        this.Content = content;
        this.AuthorName = authorName;
        this.CreatedOn = createdOn;
        this.Tags = tags;
        this.Answers = answers;
        this.Votes = votes;
    }
}