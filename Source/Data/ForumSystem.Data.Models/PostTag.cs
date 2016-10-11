using ForumSystem.Data.Models.BaseEntities;

namespace ForumSystem.Data.Models
{
    public class PostTag : BaseEntity<int>
    {
        public int PostId { get; set; }

        public Post Post { get; set; }

        public int TagId { get; set; }

        public Tag Tag { get; set; }
    }
}
