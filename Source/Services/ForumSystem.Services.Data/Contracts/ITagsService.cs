using System.Linq;

using ForumSystem.Data.Models;

namespace ForumSystem.Services.Data.Contracts
{
    public interface ITagsService
    {
        Tag CreateTag(Tag tag);

        IQueryable<Tag> GetAll();

        IQueryable<Tag> GetAllWithDeleted();

        IQueryable<Tag> GetByPostId(int postId);

        Tag GetById(int id);

        Tag GetByName(string name);

        void Update();

        void Delete(int id);
    }
}
