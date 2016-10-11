using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForumSystem.Services.Data
{
    public class EncryptionService
    {
        public string HashPassword(string password)
        {
            var bytes = new UTF8Encoding().GetBytes(password);
            var bytesHash = System.Security.Cryptography.SHA1.Create().ComputeHash(bytes);

            return Convert.ToBase64String(bytesHash);
        }
    }
}
