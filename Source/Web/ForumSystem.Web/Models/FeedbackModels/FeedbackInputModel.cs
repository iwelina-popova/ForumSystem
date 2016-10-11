using System.ComponentModel.DataAnnotations;

namespace ForumSystem.Web.Models.FeedbackModels
{
    public class FeedbackInputModel
    {
        [Required]
        [MaxLength(20)]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        //public string Author { get; set; }
    }
}
