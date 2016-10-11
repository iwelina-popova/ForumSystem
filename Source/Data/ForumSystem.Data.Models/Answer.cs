using ForumSystem.Data.Models.BaseEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ForumSystem.Data.Models
{
    public class Answer : BaseEntity<int>
    {
        [Required]
        [MaxLength(1000000)]
        public string Content { get; set; }
        
        public string AuthorId { get; set; }

        public virtual ApplicationUser Author { get; set; }

        public int PostId { get; set; }

        public virtual Post Post { get; set; }
    }
}
