using BlogWeb.Backend.Modals;

namespace Backend.Data.Services.Post
{
    public interface IPostServices
    {
        Task<Posts> PostById(int id);
        void AddToDataBase(Posts postData);

        Task<List<Posts>> AllPosts();

        Task<List<Posts>> UserPosts(int id);

        Task<List<Posts>> SearchPosts(string search);

        void DeletePost(int id);


        bool isAvailable(int postId);
    }
}
