using System;
using System.Linq;

using ForumSystem.Data.Models;
using ForumSystem.Data.Repositories;
using ForumSystem.Services.Data.Contracts;

namespace ForumSystem.Services.Data
{
    public class UsersService : IUsersService
    {
        private readonly IDbRepository<ApplicationUser> users;

        private EncryptionService hasher;

        public UsersService(IDbRepository<ApplicationUser> users)
        {
            this.users = users;
            this.hasher = new EncryptionService();
        }

        public void CreateUser(ApplicationUser user, string password)
        {
            user.PasswordHash = this.hasher.HashPassword(password);
            user.SecurityStamp = Guid.NewGuid().ToString();
            user.UserName = user.Email;
            this.users.Add(user);
            this.users.SaveChanges();
        }

        public ApplicationUser ValidateUser(string username, string password)
        {
            var user = this.users.All()
                .FirstOrDefault(u => u.UserName == username);

            var passwordHashed = this.hasher.HashPassword(password);
            if (passwordHashed.Equals(user.PasswordHash))
            {
                return user;
            }

            return null;
        }

        public void Delete(string id)
        {
            var user = this.GetById(id);
            if (user == null)
            {
                throw new NullReferenceException("There no user with given id in database!");
            }

            this.users.Delete(user);
            this.users.SaveChanges();
        }

        public IQueryable<ApplicationUser> GetAll()
        {
            return this.users.All();
        }

        public IQueryable<ApplicationUser> GetAllWithDeleted()
        {
            return this.users.AllWithDeleted();
        }

        public ApplicationUser GetById(string id)
        {
            var user = this.users
                .All()
                .FirstOrDefault(u => u.Id == id);
            if (user.IsDeleted)
            {
                return null;
            }

            return user;
        }

        public void Update()
        {
            this.users.SaveChanges();
        }
    }
}
