using System;

namespace ForumSystem.Web.Areas.Administration.ViewModels
{
    public class AdminPostViewModel
    {
        public int Id { get; set; }

        public string AuthorName { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime ModifiedOn { get; set; }

        public bool IsDeleted { get; set; }
    }
}
