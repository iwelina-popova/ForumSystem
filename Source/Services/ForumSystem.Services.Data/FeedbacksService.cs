using System.Linq;

using ForumSystem.Data.Models;
using ForumSystem.Data.Repositories;
using ForumSystem.Services.Data.Contracts;

namespace ForumSystem.Services.Data
{
    public class FeedbacksService : IFeedbacksService
    {
        private readonly IDbRepository<Feedback> feedbacks;

        public FeedbacksService(IDbRepository<Feedback> feedbacks)
        {
            this.feedbacks = feedbacks;
        }

        public void CreatePost(Feedback feedback)
        {
            this.feedbacks.Add(feedback);
            this.feedbacks.SaveChanges();
        }

        public void Delete(int id)
        {
            var feedback = this.GetById(id);
            this.feedbacks.Delete(feedback);
            this.feedbacks.SaveChanges();
        }

        public IQueryable<Feedback> GetAll()
        {
            return this.feedbacks.All();
        }

        public IQueryable<Feedback> GetAllWithDeleted()
        {
            return this.feedbacks.AllWithDeleted();
        }

        public Feedback GetById(int id)
        {
            var feedback = this.feedbacks
                .All()
                .FirstOrDefault(f => f.Id == id);
            if (feedback.IsDeleted)
            {
                return null;
            }

            return feedback;
        }

        public void Update()
        {
            this.feedbacks.SaveChanges();
        }
    }
}
