using BlogWeb.Modals;

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

        Task<string>  uploadImage(IFormFile file);
        bool isAvailable(int postId);
    }
}
