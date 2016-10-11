using System.Linq;

using ForumSystem.Data.Models.BaseEntities;

namespace ForumSystem.Data.Repositories
{
    public interface IDbRepository<T>
        where T : class, IAuditInfo, IDeletableEntity
    {
        IQueryable<T> All();

        IQueryable<T> AllWithDeleted();

        void Add(T entity);

        void Delete(T entity);

        void HardDelete(T entity);

        void SaveChanges();

        void Dispose();
    }
}
