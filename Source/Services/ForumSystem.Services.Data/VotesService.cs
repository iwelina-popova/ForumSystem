using System.Linq;

using ForumSystem.Data.Models;
using ForumSystem.Data.Repositories;
using ForumSystem.Services.Data.Contracts;

namespace ForumSystem.Services.Data
{
    public class VotesService : IVotesService
    {
        private readonly IDbRepository<PostVote> votes;

        public VotesService(IDbRepository<PostVote> votes)
        {
            this.votes = votes;
        }

        public void CreateVote(PostVote vote)
        {
            this.votes.Add(vote);
            this.votes.SaveChanges();
        }

        public IQueryable<PostVote> GetAll()
        {
            return this.votes.All();
        }

        public int GetSumByPostId(int postId)
        {
            return this.votes
                .All()
                .Where(p => p.PostId == postId)
                .Sum(p => (int)p.Type);
        }

        public PostVote GetByPostAndAuthorId(int postId, string authorId)
        {
            return this.votes
                   .All()
                   .FirstOrDefault(v => v.PostId == postId && v.AuthorId == authorId);
        }

        public void Update()
        {
            this.votes.SaveChanges();
        }
    }
}
