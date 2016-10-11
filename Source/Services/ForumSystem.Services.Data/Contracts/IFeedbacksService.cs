using System.Linq;

using ForumSystem.Data.Models;

namespace ForumSystem.Services.Data.Contracts
{
    public interface IFeedbacksService
    {
        IQueryable<Feedback> GetAll();

        IQueryable<Feedback> GetAllWithDeleted();

        Feedback GetById(int id);

        void CreatePost(Feedback feedback);

        void Update();

        void Delete(int id);
    }
}
