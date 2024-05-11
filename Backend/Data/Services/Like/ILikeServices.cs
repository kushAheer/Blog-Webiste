using BlogWeb.Modals;

namespace Backend.Data.Services.Like;

public interface ILikeServices
{
    void AddLikeByPostId(int postId ,int userId);
    string DeletedLikeByPostId(int likeId , int postId , int userId);
}