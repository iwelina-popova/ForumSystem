using Microsoft.AspNetCore.Mvc;

using ForumSystem.Data.Models;
using ForumSystem.Services.Data.Contracts;
using ForumSystem.Web.Infrastructure;
using ForumSystem.Web.Models.AnswerModels;
using Microsoft.AspNetCore.Authorization;

namespace ForumSystem.Web.Controllers
{
    [Route("api/[controller]")]
    public class AnswersController : Controller
    {
        private readonly IAnswersService answers;
        private readonly ISanitizer sanitizer;

        public AnswersController(
            IAnswersService answers,
            ISanitizer sanitizer)
        {
            this.answers = answers;
            this.sanitizer = sanitizer;
        }
        
        [Authorize]
        [HttpPost("create")]
        public IActionResult Create([FromBody] AnswerInputModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(model);
            }

            var userId = this.User.GetUserId();

            var answer = new Answer()
            {
                Content = this.sanitizer.Sanitize(model.Content),
                AuthorId = userId,
                PostId = model.PostId
            };

            var result = this.answers.Create(answer);

            return this.Ok(result);
        }
    }
}
