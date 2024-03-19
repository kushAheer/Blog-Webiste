using BlogWeb.Modals;

namespace BlogWeb.Data.Services
{
    public interface IUserServices
    {
        bool findUserName(string username);
        void AddToDataBase(Users userData);

        string hashPassword(Users user, string password);

        string generateToken(string user);

        //Users AuthenticateUser(string userName, string password);
    }
}
