namespace ForumSystem.Services.Data.Contracts
{
    public interface IPostTagsService
    {
        void CreatePostTag(int postId, int tagId);
    }
}
