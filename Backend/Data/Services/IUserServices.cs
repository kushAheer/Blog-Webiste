using BlogWeb.Modals;

namespace BlogWeb.Data.Services
{
    public interface IUserServices
    {
        bool findUserName(string username);
        bool findEmail(string email);

        Task<Users> LoginCheck(string username, string password ,string email);
        void AddToDataBase(Users userData);

        string hashPassword(Users user, string password);

        string generateToken(string user);



        //Users AuthenticateUser(string userName, string password);
    }
}
