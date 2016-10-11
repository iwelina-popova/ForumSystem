using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumSystem.Web.Models.AnswerModels
{
    public class AnswerViewModel
    {
        public string Content { get; set; }

        public DateTime AuthorName { get; set; }

        public DateTime CreatedOn { get; set; }
    }
}
