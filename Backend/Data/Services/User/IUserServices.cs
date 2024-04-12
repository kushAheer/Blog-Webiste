using BlogWeb.Modals;

namespace Backend.Data.Services.User
{
    public interface IUserServices
    {
        bool findUserName(string username);
        bool findEmail(string email);

        Task<Users> LoginCheck(string username, string password);
        void AddToDataBase(Users userData);

        string hashPassword(Users user, string password);

        string generateToken(string user);





        //Users AuthenticateUser(string userName, string password);
    }
}
