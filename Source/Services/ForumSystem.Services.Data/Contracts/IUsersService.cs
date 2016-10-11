using System.Linq;

using ForumSystem.Data.Models;

namespace ForumSystem.Services.Data.Contracts
{
    public interface IUsersService
    {
        void CreateUser(ApplicationUser user, string password);

        ApplicationUser ValidateUser(string username, string password);

        IQueryable<ApplicationUser> GetAll();

        IQueryable<ApplicationUser> GetAllWithDeleted();

        ApplicationUser GetById(string id);

        void Update();

        void Delete(string id);
    }
}
