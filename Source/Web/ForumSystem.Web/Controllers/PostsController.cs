using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

using ForumSystem.Data.Models;
using ForumSystem.Services.Data.Contracts;
using ForumSystem.Web.Infrastructure;
using ForumSystem.Web.Models.PostModels;
using ForumSystem.Web.Models.TagModels;
using Microsoft.AspNetCore.Authorization;
using ForumSystem.Web.Models.AnswerModels;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ForumSystem.Web.Controllers
{
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private readonly IMapper mapper;
        private readonly IPostsService posts;
        private readonly ITagsService tags;
        private readonly IPostTagsService postTags;
        private readonly IAnswersService answers;
        private readonly ISanitizer sanitizer;

        public PostsController(
            IMapper mapper,
            IPostsService posts,
            ITagsService tags,
            IPostTagsService postTags,
            IAnswersService answers,
            ISanitizer sanitizer)
        {
            this.mapper = mapper;
            this.posts = posts;
            this.tags = tags;
            this.postTags = postTags;
            this.answers = answers;
            this.sanitizer = sanitizer;
        }

        [HttpGet("{page:int}/{pageSize:int}")]
        public IActionResult Get(int page, int pageSize)
        {
            var currentPage = page;
            var currentPageSize = pageSize;

            var posts = this.posts
                .GetAll()
                .Skip(currentPage * currentPageSize)
                .Take(currentPageSize)
                .ToList();

            var postsModel = mapper.Map<IEnumerable<Post>, IEnumerable<PostViewModel>>(posts);
            foreach (var item in postsModel)
            {
                var postTags = this.tags.GetByPostId(item.Id).ToList();
                item.Tags = this.mapper.Map<IEnumerable<Tag>, IEnumerable<TagViewModel>>(postTags);

                var postAnswers = this.answers.GetByPostId(item.Id).ToList();
                item.Answers = this.mapper.Map<IEnumerable<Answer>, IEnumerable<AnswerViewModel>>(postAnswers);
            }

            int totalPosts = this.posts.GetAll().Count();

            PaginationSet<PostViewModel> postPageSet = new PaginationSet<PostViewModel>()
            {
                Page = currentPage,
                TotalCount = totalPosts,
                TotalPages = (int)Math.Ceiling((decimal)totalPosts / currentPageSize),
                Items = postsModel
            };

            return this.Ok(postPageSet);
        }
        
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var post = this.posts.GetById(id);
            var postModel = Mapper.Map<Post, PostViewModel>(post);

            var postTags = this.tags.GetByPostId(post.Id).ToList();
            postModel.Tags = this.mapper.Map<IEnumerable<Tag>, IEnumerable<TagViewModel>>(postTags);

            var postAnswers = this.answers.GetByPostId(post.Id).ToList();
            postModel.Answers = this.mapper.Map<IEnumerable<Answer>, IEnumerable<AnswerViewModel>>(postAnswers);

            return this.Json(postModel);
        }

        // /posts/tagged/javascript
        [HttpGet]
        public IActionResult GetByTag(string tag)
        {
            var postsWithTag = this.posts.GetByTag(tag);
            var postsModel = mapper.Map<IEnumerable<Post>, IEnumerable<PostViewModel>>(postsWithTag);

            return this.Json(postsModel);
        }

        [Authorize]
        [HttpPost("create")]
        public ActionResult Ask([FromBody] PostInputModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(model);
            }

            var userId = this.User.GetUserId();
            var post = new Post
            {
                Title = model.Title,
                Content = this.sanitizer.Sanitize(model.Content),
                AuthorId = userId
            };
            
            post = this.posts.CreatePost(post);

            if (model.Tags.Count() > 5)
            {
                model.Tags = model.Tags.Take(5);
            }

            foreach (var tag in model.Tags)
            {
                var currentTag = this.tags.GetByName(tag.Name);
                if (currentTag == null)
                {
                    currentTag = this.tags.CreateTag(new Tag()
                    {
                        Name = tag.Name
                    });
                }

                this.postTags.CreatePostTag(post.Id, currentTag.Id);
            }

            return this.Ok(post.Id);
        }
    }
}
