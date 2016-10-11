using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumSystem.Web.Models.VoteModels
{
    public class VoteInputModel
    {
        public int PostId { get; set; }

        public int VoteType { get; set; }
    }
}
