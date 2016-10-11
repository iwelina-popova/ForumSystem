using ForumSystem.Web.Models.AnswerModels;
using ForumSystem.Web.Models.TagModels;
using System;
using System.Collections.Generic;

namespace ForumSystem.Web.Models.PostModels
{
    public class PostViewModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public string AuthorName { get; set; }

        public DateTime CreatedOn { get; set; }

        public IEnumerable<TagViewModel> Tags { get; set; }

        public IEnumerable<AnswerViewModel> Answers { get; set; }

        public int Votes { get; set; }
    }
}
