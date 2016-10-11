using System;

namespace ForumSystem.Web.Models.FeedbackModels
{
    public class FeedbackViewModel
    {
        public int Id { get; set; }

        public string Title { get; set; }
        
        public string Content { get; set; }

        public string AuthorName { get; set; }

        public DateTime CreatedOn { get; set; }
    }
}
