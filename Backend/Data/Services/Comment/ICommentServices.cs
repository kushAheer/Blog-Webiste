using Backend.Modals.ViewModals;
using BlogWeb.Backend.Modals;

namespace Backend.Data.Services.Comment;

public interface ICommentServices
{
    void addComment(Comments commentsData);
    
    string deleteComment(Comments commentsData);
    
    Task<Comments> getCommentById(int commentId);
    Task<List<CommentModel>> getCommentListById(int id);
}