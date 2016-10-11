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
        private const int PostsCount = 12;
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

            posts.Add(new Post()
            {
                Title = "Angular vs Angular 2 [closed]",
                Content = @"Months ago, I decided to study Angular. When I was doing some advance and create some app using it, I realize that Angular 2 is in Developer preview, 
so its matter of time that its going to be realeased. Because Angular 2 is not going to be compatible with Angular 1 ,and there are a lot of changes, the question is if its better 
to continue developing with Angular 1.x or start developing Angular 2.
Its a fact that not always we have to be with the last of versions, or the newest language of the market, but in this case, the app is still small so I could change with out problems.",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "angular 2 html binding",
                Content = @"I am writing an Angular 2 application which is part of an ASP.NET MVC application. I want to be able to use ajax to load a partial view and display it. I have my controller set up for this, and I can make the ajax call and get the html response. However, how do I display it? If I simply use the binding syntax {{myVal}} it encodes all html characters (of course).
I need somehow to bind the inner html of a div to the variable value.
Thanks!",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "Tom Hanks to Be Honored by Hollywood Film Awards for ‘Sully’",
                Content = @"Dick Clark Productions has announced that Tom Hanks will be honored with the Hollywood Actor Award for his performance in Warner Bros.’ “Sully.”
The award will be presented Nov. 6 at the 20th annual Hollywood Film Awards at the Beverly Hilton Hotel.

“Tom Hanks delivered another amazing performance in a career filled with amazing performances. We are thrilled to honor him,” said Allen Shapiro, CEO of Dick Clark Productions.
The awards ceremony will be hosted by actor and comedian James Corden and honor films and actors, as well as artists in cinematography, visual effects, composing, costume design, editing, production design, and sound.
“Sully,” directed by Clint Eastwood, has grossed $167 million at the worldwide box office. In his review, Variety‘s Peter Debruge said Hanks “delivers a typically strong performance, quickly allowing us to forget that we’re watching an actor.”
Hanks won back-to-back best actor Academy Awards in 1994 and 1995 for “Philadelphia” and “Forrest Gump.",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "Westworld - Do you know?",
                Content = @"The Man In Black's unusual pistol is a rare LeMat 1861 revolver. It features a 9-shot .42 caliber cylinder, with an additional single-shot 20 gauge shotgun barrel. 
While the real LeMat was notoriously unreliable, a presumably perfected version would give its owner a serious firepower advantage over a typical Wild West six-shooter.",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "JavaFX load performance issue with multiple nodes",
                Content = @"I have a main file that has toggle button, on clicking one of the button I launch a new FXMLloader that has about 10SVGs, 15Textfield and 6spinners.. 
additionally it has CSS to render nodes accordingly .. it loads fine with no error or any issues but takes a sec or two before the scene is displayed... 
I know it's strange I guess it's to due with no of nodes getting initialized at same time.. is there a way to get scene displayed before the nodes start to initialized..this might take off the lagg ..
NOTE: My project requires me to naviagate to different scene on click.",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "How to get last two digits of year",
                Content = @"Based off the code below I'm trying to get to the last two digits of the year from this:
<p>int fYear;</p>
<p>if (DateTime.Today.Month < 10)</p>
<p>fYear = DateTime.Today.Year;</p>
<p>else</p>
<p>fYear = DateTime.Today.Year + 1;</p>",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "Bad Things in Good Movies vice versa",
                Content = @" In <b><i>Batman Begins</i></b> (2005) there's a scene where Batman drives his Batmobile over top a police car - crushing it and nearly killing the cops inside.  He did this wantonly, knowing there were men inside and there was no way he could know they would not be instantly crushed to death as the patrol car was practically flattened.<br>
Now, granted the cops were chasing him and it had been established that there was corruption inside the Gotham PD.  But the presence of Jim Gordon proved that not <b>all </b>cops were corrupt.  <br>
Batman's actions could have easily killed or permanently crippled these cops (and for all we know they could've been perfectly honest cops with families) - if Batman had killed them, he'd be no better than the criminal who killed his parents, and this wanton, lethal-level aggression displayed toward people he knew nothing about made him no better. <br>
This action was a bad thing (which was completely out of character for everything Batman stands for) in an otherwise good movie.",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "Movies You Think Everyone Loves?",
                Content = @"<ol><li>Back to the Future (1985)</li>
<li> Raiders of the Lost Ark(1981) </li>
<li> Die Hard(1988) </li>
<li> The Dark Knight(2008) </li>
<li> The Martian(2015) </li>
<li> Terminator 2: Judgment Day(1991) </li>
<li> True Romance(1993) </li>
<li> Heat(1995) </li>
<li> The Town(2010) </li>
<li> Gladiator(2000) </li>
</ol> ",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "Was anyone confused by the ending of Meet Joe Black?",
                Content = @" I just watched Meet Joe Black and I thought it was a wonderful movie. However, the ending really bothered me. <br>
<br>
The main female character falls in love with Brad Pitt's character at the begging of the movie. Later, Brad Pitt's character dies and comes back as Death. 
The leading lady of the movie notices some changes in Brad Pitt's demeanor, but falls in love with him. At the end of the movie, Death reveals his true identity to 
the lady and she is shocked. Brad Pitt is taking away her father in the last few moments of the movie and she decides to chase after Brad Pitt. 
When she reaches Brad Pitt's character she sees that Death has left, and the original personality that Brad Pitt had is back. Then, like NOTHING HAPPENED,
she decides to go dancing with Brad Pitt. Is anyone else bothered this? Did she not love Death? She fell in love with death, and not Brad's original personality!!!!
What are your thoughts? Sorry I didn't include the actual character names.. I'm kinda lazy :P",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "Fuzz Duster - Round 2 serves it up LAME!",
                Content = @"<p>I grew up in the middle of the Automotive Dark Ages. I was surrounded by the last, sad remnants of the old V8, rear drive cars and the vanguard of the new, 
more compact vehicles. At the time, I remember thinking that there was no reason to announce to the world that you had a “2.2” on big numbers on the door. I mean, what good was that? &nbsp;
What I didn’t realize that the time was how truly sad the “real” cars had gotten.&nbsp;</p><p>That dawned on me as I grew up, and that’s part of the reason that 
I love to model cars from this time period. Remember them from my childhood, and now understand them, and what they meant as the collapse of a passion for motoring that 
would take a long time to recover. &nbsp;There are a lot of cars that fit into this category, but some of my favourites are those that tried hard, but failed.</p><p>These were 
the “Faded Glory” cars; little more that econoboxes or downsized shadows of their namesakes’ former greatness. Perhaps one of the best example of this is the Road Runner. 
By the time 1980 rolled around, it was little more than just a decal package on a Volare, and a not-very-inspiringly-restyled Volare at that. &nbsp;</p><p>That’s why 
I was so pumped to see Round 2 punch out the old MPC “Fuzz Duster” Volare! It really is an encapsulation of its era, and all that was wrong with it. &nbsp;Despite the 
lameness of the car, though, MPC did a pretty nice job on the kit, even if it’s a bit incorrect.&nbsp;</p><p>Check out my out of box review of this “muscle” machine here. 
Just remember that yes, it DID get this bad!</p>",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "Where to go on holidays in Europe in November",
                Content = @"<p>I'm looking for some place to go on holidays in Europe for a few days at the start of November. There will be 3 of us, 
all women in our mid 20s so we would like somewhere that will have good night life and ideally be warm (though I know most of Europe won't be warm at this time of the year). 
I suppose the canary island would be the best place but has anyone got any other suggestions?</p>",
                Author = users[random.Next(0, users.Count)]
            });

            posts.Add(new Post()
            {
                Title = "Sleep on a boat instead of an hotel!it's nearer to the beach",
                Content = @"<p>Hello! This summer I went to <a class=""internal auto pid3182"" target=""_blank"" href=""/Tourism-g189400-Athens_Attica-Vacations.html"">
Athens</a> with my girlfriend and we decided to sleep on a boat instead of an hotel. We haven't found any interesting hotel so we decided to try something else. 
A friend suggested to try HarbourSpot and we visited the website. I really liked it and the boat was really beautiful and cheap. For the sea destination is a wonderful 
choice because you sleep ON the sea and you wake up ON the sea! Going to the beach is just a small step! From this moment when we'll decide to go to the beach I'll always book a boat with HarbourSpot!</p>",
                Author = users[random.Next(0, users.Count)]
            });

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
