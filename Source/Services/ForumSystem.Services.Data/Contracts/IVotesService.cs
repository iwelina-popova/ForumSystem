using System.Linq;

using ForumSystem.Data.Models;

namespace ForumSystem.Services.Data.Contracts
{
    public interface IVotesService
    {
        IQueryable<PostVote> GetAll();

        int GetSumByPostId(int postId);

        PostVote GetByPostAndAuthorId(int postId, string authorId);

        void CreateVote(PostVote vote);

        void Update();
    }
}
