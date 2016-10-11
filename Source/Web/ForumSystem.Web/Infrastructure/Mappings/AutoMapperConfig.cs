using AutoMapper;

namespace ForumSystem.Web.Infrastructure.Mappings
{
    public class AutoMapperConfig
    {
        //private MapperConfiguration config;

        //public AutoMapperConfig()
        //{
        //    var config = new MapperConfiguration(cfg =>
        //    {
        //        cfg.AddProfile<ForumSystemMappingProfile>();
        //    });
        //}

        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<ForumSystemMappingProfile>();
            });
        }
    }
}
