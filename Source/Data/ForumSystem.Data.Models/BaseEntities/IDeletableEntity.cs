using System;

namespace ForumSystem.Data.Models.BaseEntities
{
    public interface IDeletableEntity
    {
        bool IsDeleted { get; set; }

        DateTime? DeletedOn { get; set; }
    }
}
