using System.Linq;

using ForumSystem.Data.Models;

namespace ForumSystem.Services.Data.Contracts
{
    public interface IPostsService
    {
        IQueryable<Post> GetAll();

        IQueryable<Post> GetAllWithDeleted();

        IQueryable<Post> GetByTag(string tagName);

        Post GetById(int id);

        Post GetByIdWithDeleted(int id);

        Post CreatePost(Post post);

        void Update();

        void Delete(int id);
    }
}
