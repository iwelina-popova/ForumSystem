using ForumSystem.Web.Models.TagModels;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ForumSystem.Web.Models.PostModels
{
    public class PostInputModel
    {
        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        //[AllowHtml]
        public string Content { get; set; }

        [Required]
        public IEnumerable<TagInputModel> Tags { get; set; }
    }
}
