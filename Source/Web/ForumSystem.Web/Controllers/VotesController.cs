using Microsoft.AspNetCore.Mvc;

using ForumSystem.Data.Models;
using ForumSystem.Services.Data.Contracts;
using ForumSystem.Web.Models.VoteModels;
using ForumSystem.Web.Infrastructure;

namespace ForumSystem.Web.Controllers
{
    [Route("api/[controller]")]
    public class VotesController : Controller
    {
        private readonly IPostsService posts;
        private readonly IVotesService votes;

        public VotesController(IPostsService posts, IVotesService votes)
        {
            this.votes = votes;
            this.posts = posts;
        }

        [HttpPost("vote")]
        public IActionResult Vote([FromBody] VoteInputModel model)
        {
            if (model.VoteType > 1)
            {
                model.VoteType = 1;
            }

            if (model.VoteType < -1)
            {
                model.VoteType = -1;
            }
            
            var userId = this.User.GetUserId();
            var vote = this.votes.GetByPostAndAuthorId(model.PostId, userId);

            if (vote == null)
            {
                vote = new PostVote()
                {
                    AuthorId = userId,
                    PostId = model.PostId,
                    Type = (VoteType)model.VoteType
                };

                this.votes.CreateVote(vote);
            }
            else
            {
                if ((int)vote.Type == 1 && model.VoteType == -1)
                {
                    vote.Type = VoteType.Neautral;
                }
                else if ((int)vote.Type == -1 && model.VoteType == 1)
                {
                    vote.Type = VoteType.Neautral;
                }
                else
                {
                    vote.Type = (VoteType)model.VoteType;
                }
            }

            this.votes.Update();

            var postVotes = this.votes.GetSumByPostId(model.PostId);
            return this.Json(new { Count = postVotes });
        }
    }
}
