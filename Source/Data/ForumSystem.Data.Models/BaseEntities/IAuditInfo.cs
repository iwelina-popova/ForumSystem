using System;

namespace ForumSystem.Data.Models.BaseEntities
{
    public interface IAuditInfo
    {
        DateTime CreatedOn { get; set; }

        DateTime? ModifiedOn { get; set; }
    }
}
