using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

using ForumSystem.Data.Models;
using ForumSystem.Services.Data.Contracts;
using ForumSystem.Web.Areas.Administration.ViewModels;
using Microsoft.AspNetCore.Authorization;

namespace ForumSystem.Web.Areas.Administration.Controllers
{
    [Area("Administration")]
    [Route("api/[controller]")]
    public class AdministrationController : Controller
    {
        private readonly IMapper mapper;
        private readonly IPostsService posts;

        public AdministrationController(IMapper mapper, IPostsService posts)
        {
            this.mapper = mapper;
            this.posts = posts;
        }

        [HttpGet("posts")]
        [Authorize]
        public IActionResult GetAllPosts()
        {
            var allPosts = this.posts.GetAllWithDeleted();
            var result = this.mapper.Map<IEnumerable<Post>, IEnumerable<AdminPostViewModel>>(allPosts);

            return this.Json(result);
        }

        [HttpPost("posts/create")]
        public IActionResult CreatePost([FromBody] AdminPostInputModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(model);
            }

            var post = this.mapper.Map<AdminPostInputModel, Post>(model);
            var result = this.posts.CreatePost(post);

            return this.Ok(result);

        }

        [HttpDelete("posts/delete/{postId:int}")]
        public IActionResult DeletePost(int postId)
        {
            this.posts.Delete(postId);

            return this.Json(new { Result = "Successed" });
        }

        [HttpPut("posts/update")]
        public IActionResult UpdatePost([FromBody] AdminPostInputModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(model);
            }

            var post = this.posts.GetByIdWithDeleted(model.Id);
            if (post == null)
            {
                return this.NotFound();
            }

            post.Title = model.Title;
            post.Content = model.Content;

            this.posts.Update();

            return this.Json(post);
        }
    }
}
