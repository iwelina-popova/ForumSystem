declare var moment: any;

export class AdminPost {
    Id: number;
    Title: string;
    Content: string;
    AuthorName: string;
    CreatedOn: Date;
    ModifiedOn: Date;
    IsDeleted: boolean;
    CreatedOnString: string;

    constructor(id: number,
        title: string,
        content: string,
        authorName: string,
        createdOn: Date,
        modifiedOn: Date,
        isDeleted: boolean) {
        this.Id = id;
        this.Title = title;
        this.Content = content;
        this.AuthorName = authorName;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
        this.IsDeleted = isDeleted;
    }
}