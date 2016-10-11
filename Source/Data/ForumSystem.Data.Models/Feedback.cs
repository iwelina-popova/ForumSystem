using System.ComponentModel.DataAnnotations;

using ForumSystem.Data.Models.BaseEntities;

namespace ForumSystem.Data.Models
{
    public class Feedback : BaseEntity<int>
    {
        public string AuthorId { get; set; }

        public virtual ApplicationUser Author { get; set; }

        [Required]
        [MaxLength(20)]
        public string Title { get; set; }

        [Required]
        [MaxLength(100000)]
        public string Content { get; set; }
    }
}
