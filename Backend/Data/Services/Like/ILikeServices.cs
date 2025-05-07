using BlogWeb.Backend.Modals;

namespace Backend.Data.Services.Like;

public interface ILikeServices
{
    void AddLikeByPostId(int postId ,int userId);
    string DeletedLikeByPostId(int postId , int userId);
    
    bool isLiked(int postId , int userId);
}