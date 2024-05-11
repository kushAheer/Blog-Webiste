using BlogWeb.Data;
using BlogWeb.Modals;

namespace Backend.Data.Services.Like;

public class LikeMethod : ILikeServices
{
    private readonly AppDbContext _context;
    
    public LikeMethod(AppDbContext context)
    {
        _context = context;
    }
    public void AddLikeByPostId(int postId , int userId)
    {
         var post = _context.Posts.Find(postId);
         
         if (post != null)
         {
             Likes data = new Likes();
             data.postId = postId;
             data.userId = userId;
             post.totalLikes += 1;
             _context.Likes.Add(data);
             _context.SaveChanges();
             

         }

         



    }

    public string DeletedLikeByPostId(int likeId,int postId , int userId)
    {
        var post = _context.Posts.Find(postId);
         
        if (post != null)
        {
            Likes data = _context.Likes.FirstOrDefault(x => x.userId == userId && x.postId == postId && x.Id == likeId);
            if (data == null)
            {
                return "Error";
            }
            post.totalLikes -= 1;
            _context.Likes.Remove(data);
            _context.SaveChanges();
            return "200";
        }

        return "Error";
    }
}