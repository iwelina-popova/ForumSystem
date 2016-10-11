using ForumSystem.Services.Data.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ForumSystem.Data.Models;
using ForumSystem.Data.Repositories;

namespace ForumSystem.Services.Data
{
    public class AnswersService : IAnswersService
    {
        private readonly IDbRepository<Answer> answers;

        public AnswersService(IDbRepository<Answer> answers)
        {
            this.answers = answers;
        }

        public Answer Create(Answer answer)
        {
            this.answers.Add(answer);
            this.answers.SaveChanges();

            return answer;
        }

        public void Delete(int id)
        {
            var answer = this.GetById(id);
            this.answers.Delete(answer);
            this.answers.SaveChanges();
        }

        public IQueryable<Answer> GetAll()
        {
            return this.answers.All();
        }

        public IQueryable<Answer> GetAllWithDeleted()
        {
            return this.answers.AllWithDeleted();
        }

        public Answer GetById(int id)
        {
            return this.answers
                .All()
                .FirstOrDefault(a => a.Id == id);
        }

        public IQueryable<Answer> GetByPostId(int postId)
        {
            return this.answers
                .All()
                .Where(a => a.PostId == postId);
        }

        public void Update()
        {
            this.answers.SaveChanges();
        }
    }
}
