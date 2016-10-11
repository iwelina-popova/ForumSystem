using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using ForumSystem.Data.Models.BaseEntities;

namespace ForumSystem.Data.Models
{
    public class Tag : BaseEntity<int>
    {
        private ICollection<PostTag> postTags;

        public Tag()
        {
            this.postTags = new HashSet<PostTag>();
        }

        [Required]
        [MaxLength(20)]
        public string Name { get; set; }

        public virtual ICollection<PostTag> PostTags
        {
            get { return this.postTags; }
            set { this.postTags = value; }
        }
    }
}
