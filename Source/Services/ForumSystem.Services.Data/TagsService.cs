using System.Linq;

using ForumSystem.Data.Models;
using ForumSystem.Data.Repositories;
using ForumSystem.Services.Data.Contracts;

namespace ForumSystem.Services.Data
{
    public class TagsService : ITagsService
    {
        private readonly IDbRepository<Tag> tags;

        public TagsService(IDbRepository<Tag> tags)
        {
            this.tags = tags;
        }

        public Tag CreateTag(Tag tag)
        {
            this.tags.Add(tag);
            this.tags.SaveChanges();

            return tag;
        }

        public void Delete(int id)
        {
            var tag = this.GetById(id);
            this.tags.Delete(tag);
            this.tags.SaveChanges();
        }

        public IQueryable<Tag> GetAll()
        {
            return this.tags.All();
        }

        public IQueryable<Tag> GetAllWithDeleted()
        {
            return this.tags.AllWithDeleted();
        }

        public IQueryable<Tag> GetByPostId(int postId)
        {
            return this.tags
                .All()
                .Where(t => t.PostTags
                .Any(pt => pt.PostId == postId));
        }

        public Tag GetById(int id)
        {
            return this.tags
                .All()
                .FirstOrDefault(t => t.Id == id);
        }

        public Tag GetByName(string name)
        {
            return this.tags
                .All()
                .FirstOrDefault(t => t.Name == name);
        }

        public void Update()
        {
            this.tags.SaveChanges();
        }
    }
}
