using System;
using System.Linq;
using AutoMapper;

using ForumSystem.Data.Models;
using ForumSystem.Web.Models.FeedbackModels;
using ForumSystem.Web.Models.PostModels;
using ForumSystem.Web.Models.TagModels;
using ForumSystem.Web.Areas.Administration.ViewModels;
using ForumSystem.Web.Models.AnswerModels;

namespace ForumSystem.Web.Infrastructure.Mappings
{
    public class ForumSystemMappingProfile : Profile
    {
        public ForumSystemMappingProfile()
        {
            CreateMap<Post, PostViewModel>()
                .ForMember(dest => dest.AuthorName, opt => opt.MapFrom(src => src.Author.UserName))
                .ForMember(dest => dest.Votes, opt => opt.MapFrom(src => src.PostVote.Sum(s => (int)s.Type)));

            CreateMap<Post, AdminPostViewModel>()
                .ForMember(dest => dest.AuthorName, opt => opt.MapFrom(src => src.Author.UserName));

            CreateMap<AdminPostInputModel, Post>()
                .ForMember(dest => dest.Id, opt => opt.Ignore());

            CreateMap<Answer, AnswerViewModel>()
                .ForMember(dest => dest.AuthorName, opt => opt.MapFrom(src => src.Author.UserName));

            CreateMap<Tag, TagViewModel>();

            CreateMap<FeedbackInputModel, Feedback>();

            CreateMap<Feedback, FeedbackViewModel>()
                .ForMember(dest => dest.AuthorName, opt => opt.MapFrom(src => src.Author.UserName));
        }

        //protected override void Configure()
        //{
        //    CreateMap<Post, PostViewModel>()
        //    .ForMember(m => m.Author, map => map.MapFrom(p => p.Author.UserName));

        //    CreateMap<Feedback, FeedbackViewModel>()
        //        .ForMember(m => m.Author, map => map.MapFrom(f => f.Author.UserName));
        //}
    }
}

