using BlogWeb.Backend.Data;
using BlogWeb.Backend.Modals;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data.Services.Comment;

public class CommentMethod : ICommentServices
{
    private readonly AppDbContext _context;

    public CommentMethod(AppDbContext context)
    {
        _context = context;
    }
    
    public void addComment(Comments commentsData)
    {
        try
        {
            _context.Comments.Add(commentsData);
            _context.SaveChanges();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
            
    }

    public string deleteComment(Comments commentsData)
    {
        var post = _context.Posts.Find(commentsData.postId);
         
        if (post != null)
        {
            
            Comments data = _context.Comments.FirstOrDefault(x => x.userId == commentsData.userId && x.Id == commentsData.Id);
            if (data == null)
            {
                return "Error";
            }
            _context.Comments.Remove(data);
            _context.SaveChanges();
            return "200";
        }

        return "Error";
    }
}