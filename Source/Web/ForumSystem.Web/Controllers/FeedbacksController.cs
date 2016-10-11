using AutoMapper;
using ForumSystem.Data.Models;
using ForumSystem.Services.Data.Contracts;
using ForumSystem.Web.Models.FeedbackModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using ForumSystem.Web.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.AspNetCore.Http;

namespace ForumSystem.Web.Controllers
{
    [Route("api/[controller]")]
    public class FeedbacksController : Controller
    {
        private const string FeedbackCacheKey = "feedbacks";

        private readonly IMapper mapper;
        private readonly IMemoryCache cache;
        private readonly ISanitizer sanitizer;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IFeedbacksService feedbacks;

        public FeedbacksController(
            IMapper mapper,
            IMemoryCache cache,
            ISanitizer sanitizer,
            IHttpContextAccessor httpContextAccessor,
            IFeedbacksService feedbacks)
        {
            this.httpContextAccessor = httpContextAccessor;
            this.mapper = mapper;
            this.cache = cache;
            this.sanitizer = sanitizer;
            this.feedbacks = feedbacks;
        }

        [Authorize]
        // GET: /feedbacks/all
        [HttpGet("all/{page:int=0}/{pageSize=10}")]
        public IActionResult Get(int? page, int? pageSize)
        {
            var currentPage = page.Value;
            var currentPageSize = pageSize.Value;

            var result = new List<Feedback>();
            if (!this.cache.TryGetValue(FeedbackCacheKey + currentPage, out result))
            {
                var feedbacks = this.feedbacks
                .GetAll()
                .Skip(currentPage * currentPageSize)
                .Take(currentPageSize)
                .ToList();

                result = this.cache.Set(
                "feedbacks" + currentPage,
                feedbacks,
                new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromMinutes(10)));
            }

            var feedbacksModel = mapper.Map<IEnumerable<Feedback>, IEnumerable<FeedbackViewModel>>(result);

            var totalFeedbacks = this.feedbacks.GetAll().Count();
            var FeedbackPageSet = new PaginationSet<FeedbackViewModel>()
            {
                Page = currentPage,
                TotalCount = totalFeedbacks,
                TotalPages = (int)Math.Ceiling((decimal)totalFeedbacks / currentPageSize),
                Items = feedbacksModel
            };

            return this.Ok(FeedbackPageSet);
        }

        [HttpPost("create")]
        public IActionResult Create([FromBody] FeedbackInputModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            var userId = this.User.GetUserId();

            var feedback = this.mapper.Map<Feedback>(model);
            feedback.AuthorId = userId;
            feedback.Content = this.sanitizer.Sanitize(feedback.Content);

            this.feedbacks.CreatePost(feedback);

            return this.Ok(feedback);
        }
    }
}
