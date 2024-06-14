using BlogWeb.Backend.Modals;

namespace Backend.Data.Services.User
{
    public interface IUserServices
    {
        bool findUserName(string username);
        bool findEmail(string email);

        Task<Users> LoginCheck(string username, string password);
        void AddToDataBase(Users userData);

        string hashPassword(Users user, string password);

        string generateToken(Users userData);
        
        void updateProfile(Users user);
        
        Task<Users> getUser(int id);





        //Users AuthenticateUser(string userName, string password);
    }
}
