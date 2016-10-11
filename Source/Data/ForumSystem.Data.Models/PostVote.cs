using System.ComponentModel.DataAnnotations;

using ForumSystem.Data.Models.BaseEntities;

namespace ForumSystem.Data.Models
{
    public class PostVote : BaseEntity<int>
    {
        [Required]
        public string AuthorId { get; set; }

        public virtual ApplicationUser Author { get; set; }

        public int PostId { get; set; }

        public virtual Post Post { get; set; }

        public VoteType Type { get; set; }
    }
}
