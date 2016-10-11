using System.ComponentModel.DataAnnotations;

namespace ForumSystem.Web.Models.AnswerModels
{
    public class AnswerInputModel
    {
        [Required]
        public string Content { get; set; }

        public int PostId { get; set; }
    }
}
