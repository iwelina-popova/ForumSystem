using ForumSystem.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumSystem.Services.Data.Contracts
{
    public interface IAnswersService
    {
        IQueryable<Answer> GetAll();

        IQueryable<Answer> GetAllWithDeleted();

        Answer GetById(int id);

        IQueryable<Answer> GetByPostId(int postId);

        Answer Create(Answer answer);

        void Update();

        void Delete(int id);
    }
}
