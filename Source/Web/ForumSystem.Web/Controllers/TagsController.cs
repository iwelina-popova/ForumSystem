using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using ForumSystem.Services.Data.Contracts;
using ForumSystem.Web.Models.TagModels;
using ForumSystem.Data.Models;

namespace ForumSystem.Web.Controllers
{
    [Route("api/[controller]")]
    public class TagsController : Controller
    {
        private readonly IMapper mapper;
        private readonly ITagsService tags;

        public TagsController(IMapper mapper, ITagsService tags)
        {
            this.mapper = mapper;
            this.tags = tags;
        }

        public IEnumerable<TagViewModel> Get()
        {
            var allTags = this.tags.GetAll().ToList();
            var tagsModel = this.mapper.Map<IEnumerable<Tag>, IEnumerable<TagViewModel>>(allTags);

            return tagsModel;
        }
    }
}
