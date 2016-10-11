using Microsoft.Extensions.DependencyInjection;

using ForumSystem.Data.Repositories;
using ForumSystem.Services.Data;
using ForumSystem.Services.Data.Contracts;
using ForumSystem.Web.Infrastructure;
using AutoMapper;
using ForumSystem.Web.Infrastructure.Mappings;

namespace ForumSystem.Web.Services
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            //services.AddTransient<IEmailSender, AuthMessageSender>();
            //services.AddTransient<ISmsSender, AuthMessageSender>();

            services.AddScoped(typeof(IDbRepository<>), typeof(DbRepository<>));

            services.AddScoped<IUsersService, UsersService>();
            services.AddScoped<ITagsService, TagsService>();
            services.AddScoped<IPostsService, PostsService>();
            services.AddScoped<IPostTagsService, PostTagsService>();
            services.AddScoped<IFeedbacksService, FeedbacksService>();
            services.AddScoped<IVotesService, VotesService>();
            services.AddScoped<IAnswersService, AnswersService>();

            services.AddScoped<ISanitizer, HtmlSanitizerAdapter>();
            services.AddSingleton<IMapper>(sp => ConfigurateAutoMapper(services).CreateMapper());

            return services;
        }

        private static MapperConfiguration ConfigurateAutoMapper(IServiceCollection services)
        {
            return new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new ForumSystemMappingProfile());
            });
        }
    }
}
