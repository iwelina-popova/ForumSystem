using ForumSystem.Data.Models;
using ForumSystem.Data.Repositories;
using ForumSystem.Services.Data.Contracts;

namespace ForumSystem.Services.Data
{
    public class PostTagsService : IPostTagsService
    {
        private readonly IDbRepository<PostTag> postTags;

        public PostTagsService(IDbRepository<PostTag> postTags)
        {
            this.postTags = postTags;
        }

        public void CreatePostTag(int postId, int tagId)
        {
            var postTag = new PostTag()
            {
                PostId = postId,
                TagId = tagId
            };

            this.postTags.Add(postTag);
            this.postTags.SaveChanges();
        }
    }
}
