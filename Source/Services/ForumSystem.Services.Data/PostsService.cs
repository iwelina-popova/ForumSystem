using System.Linq;

using ForumSystem.Data.Models;
using ForumSystem.Data.Repositories;
using ForumSystem.Services.Data.Contracts;

namespace ForumSystem.Services.Data
{
    public class PostsService : IPostsService
    {
        private readonly IDbRepository<Post> posts;

        public PostsService(IDbRepository<Post> posts)
        {
            this.posts = posts;
        }

        public Post CreatePost(Post post)
        {
            this.posts.Add(post);
            this.posts.SaveChanges();

            return post;
        }

        public void Delete(int id)
        {
            var post = this.GetById(id);
            this.posts.Delete(post);
            this.posts.SaveChanges();
        }

        public IQueryable<Post> GetAll()
        {
            return this.posts.All();
        }

        public IQueryable<Post> GetAllWithDeleted()
        {
            return this.posts.AllWithDeleted();
        }

        public IQueryable<Post> GetByTag(string tagName)
        {
            return this.posts
                .All()
                .Where(p => p.PostTags.Any(pt => pt.Tag.Name == tagName));
        }

        public Post GetById(int id)
        {
            var post = this.posts
                .All()
                .FirstOrDefault(p => p.Id == id);

            return post;
        }

        public Post GetByIdWithDeleted(int id)
        {
            var post = this.posts
                .AllWithDeleted()
                .FirstOrDefault(p => p.Id == id);

            return post;
        }

        public void Update()
        {
            this.posts.SaveChanges();
        }
    }
}
