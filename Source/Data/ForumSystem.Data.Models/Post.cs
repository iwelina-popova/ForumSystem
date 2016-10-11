using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using ForumSystem.Data.Models.BaseEntities;

namespace ForumSystem.Data.Models
{
    public class Post : BaseEntity<int>
    {
        private ICollection<PostTag> postTags;
        private ICollection<PostVote> postVote;
        private ICollection<Answer> answers;

        public Post()
        {
            this.postTags = new HashSet<PostTag>();
            this.postVote = new HashSet<PostVote>();
            this.answers = new HashSet<Answer>();
        }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        public string AuthorId { get; set; }

        public ApplicationUser Author { get; set; }

        [Required]
        [MaxLength(1000000)]
        public string Content { get; set; }

        public ICollection<PostTag> PostTags
        {
            get { return this.postTags; }
            set { this.postTags = value; }
        }

        public ICollection<PostVote> PostVote
        {
            get { return this.postVote; }
            set { this.postVote = value; }
        }

        public ICollection<Answer> Answers
        {
            get { return this.answers; }
            set { this.answers = value; }
        }
    }
}
