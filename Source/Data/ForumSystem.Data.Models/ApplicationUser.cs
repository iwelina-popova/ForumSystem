using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using ForumSystem.Data.Models.BaseEntities;

namespace ForumSystem.Data.Models
{
    public class ApplicationUser : IdentityUser, IAuditInfo, IDeletableEntity
    {
        private ICollection<Post> posts;
        private ICollection<Feedback> feedbacks;
        private ICollection<Answer> answers;

        public ApplicationUser()
        {
            this.CreatedOn = DateTime.UtcNow;
            this.posts = new HashSet<Post>();
            this.feedbacks = new HashSet<Feedback>();
            this.answers = new HashSet<Answer>();
        }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public virtual ICollection<Post> Posts
        {
            get { return this.posts; }
            set { this.posts = value; }
        }

        public virtual ICollection<Feedback> Feedbacks
        {
            get { return this.feedbacks; }
            set { this.feedbacks = value; }
        }

        public virtual ICollection<Answer> Answers
        {
            get { return this.answers; }
            set { this.answers = value; }
        }
    }
}
