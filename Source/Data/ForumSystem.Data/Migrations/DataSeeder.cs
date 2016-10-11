using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.AspNetCore.Identity;

using ForumSystem.Data.Models;

namespace ForumSystem.Data.Migrations
{
    public static class DataSeeder
    {
        private const int PostsCount = 15;
        private static Random random = new Random();

        public static void SeedData(this ForumSystemDbContext context)
        {
            if (context.Users.Any())
            {
                return;
            }

            SeedUsers(context);
            SeedTags(context);
            SeedPosts(context);
            SeedPostVotes(context);
            SeedAnswers(context);
            SeedFeedbacks(context);

            for (int i = 0; i < PostsCount; i++)
            {
                SeedPostTags(context, i);
            }
        }

        internal static void SeedUsers(ForumSystemDbContext context)
        {
            const string adminEmail = "admin@admin.com";
            const string adminPassword = "adminadmin";
            const string password = "123456";

            var users = new List<ApplicationUser>();

            var admin = new ApplicationUser()
            {
                Email = adminEmail,
                UserName = adminEmail,
                SecurityStamp = Guid.NewGuid().ToString()
            };

            admin.PasswordHash = new PasswordHasher<ApplicationUser>().HashPassword(admin, adminPassword);
            users.Add(admin);

            for (int i = 0; i < 5; i++)
            {
                var email = "user" + i + "@forum.com";
                var user = new ApplicationUser()
                {
                    Email = email,
                    UserName = email,
                    SecurityStamp = Guid.NewGuid().ToString()
                };

                user.PasswordHash = new PasswordHasher<ApplicationUser>().HashPassword(user, password);
                users.Add(user);
            }

            context.Users.AddRange(users);
            context.SaveChanges();
        }

        internal static void SeedTags(ForumSystemDbContext context)
        {
            var tagsArray = new string[50]
            {
                "beach", "sunset", "water", "sky", "flower", "cat", "dog", "people", "house", "car",
                "river", "music", "moon", "baby", "food", "world", "animal", "smile", "disco", "bar",
                "bug", "zoo", "mirror", "red", "blue", "night", "white", "tree", "green", "art",
                "python", "java", "c#", "javascript", "family", "computer", "programming", "macro", "new", "c++",
                "TV", "vacation", "work", "school", "friend", "coffee", "dance", "cinema", "movie", "sleep"
            };

            var tags = new List<Tag>();
            for (int i = 0; i < 50; i++)
            {
                var tag = new Tag()
                {
                    Name = tagsArray[random.Next(0, tagsArray.Length)]
                };

                tags.Add(tag);
            }

            context.Tags.AddRange(tags);
            context.SaveChanges();
        }

        internal static void SeedPosts(ForumSystemDbContext context)
        {
            var posts = new List<Post>();
            var users = context.Users.ToList();
            var tags = context.Tags.ToList();

            for (int i = 0; i < PostsCount; i++)
            {
                var post = new Post()
                {
                    Title = "Some title " + i,
                    Author = users[random.Next(0, users.Count)],
                    Content = "Something very important and much longer " + i
                };

                posts.Add(post);
            }

            context.Posts.AddRange(posts);
            context.SaveChanges();
        }

        internal static void SeedPostVotes(ForumSystemDbContext context)
        {
            var posts = context.Posts.ToList();
            var users = context.Users.ToList();

            for (int i = 0; i < posts.Count; i++)
            {
                var votes = new List<PostVote>();
                for (int votesCount = 0; votesCount < random.Next(1, 10); votesCount++)
                {
                    votes.Add(new PostVote()
                    {
                        Post = posts[i],
                        Author = users[random.Next(1, users.Count)],
                        Type = (VoteType)random.Next(-1, 2)
                    });
                }

                posts[i].PostVote = votes;
            }

            context.SaveChanges();
        }

        internal static void SeedAnswers(ForumSystemDbContext context)
        {
            var posts = context.Posts.ToList();
            var users = context.Users.ToList();

            var answers = new List<Answer>();
            for (int i = 0; i < 10; i++)
            {
                var answer = new Answer()
                {
                    Content = $"This is answer {i} to post",
                    Post = posts[i + 1],
                    Author = users[random.Next(0, users.Count)]
                };

                answers.Add(answer);
            }

            context.Answers.AddRange(answers);
            context.SaveChanges();
        }

        internal static void SeedFeedbacks(ForumSystemDbContext context)
        {
            var feedbacks = new List<Feedback>();
            var users = context.Users.ToList();

            for (int i = 0; i < 10; i++)
            {
                var feedback = new Feedback()
                {
                    Title = $"Feedback title {i}",
                    Content = $"Feedback content <b>{i}</b>",
                    Author = users[random.Next(0, users.Count)]
                };

                feedbacks.Add(feedback);
            }

            context.Feedbacks.AddRange(feedbacks);
            context.SaveChanges();
        }

        internal static void SeedPostTags(ForumSystemDbContext context, int count)
        {
            var postTags = new List<PostTag>();
            var posts = context.Posts.ToList();
            var tags = context.Tags.ToList();

            var tagStartIndex = random.Next(0, tags.Count - 5);
            var tagEndIndex = tagStartIndex + 5;
            for (int tagCount = tagStartIndex; tagCount < tagEndIndex; tagCount++)
            {
                var postTag = new PostTag()
                {
                    PostId = posts[count].Id,
                    TagId = tags[tagCount].Id
                };

                postTags.Add(postTag);
            }

            context.PostTags.AddRange(postTags);
            context.SaveChanges();
        }

        private static string HashPassword(string password)
        {
            var bytes = new UTF8Encoding().GetBytes(password);
            var bytesHash = System.Security.Cryptography.SHA1.Create().ComputeHash(bytes);

            return Convert.ToBase64String(bytesHash);
        }
    }
}
