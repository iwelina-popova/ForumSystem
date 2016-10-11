using System.ComponentModel.DataAnnotations;

namespace ForumSystem.Web.Models.TagModels
{
    public class TagInputModel
    {
        [Required]
        public string Name { get; set; }
    }
}
