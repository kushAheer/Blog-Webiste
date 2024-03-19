using BlogWeb.Modals;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BlogWeb.Data.Services
{
    public class UserMethods : IUserServices
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;
        
        public UserMethods(AppDbContext context ,IConfiguration config)
        {

            _context = context;
            _config = config;

        }
        public async void AddToDataBase(Users userData)
        {
            await _context.Users.AddAsync(userData);
            _context.SaveChanges();
        }

        public bool findEmail(string email)
        {
            bool result = _context.Users.Any(x => x.Email == email);
            return result;
        }



        public bool findUserName(string username)
        {
            //_context.Users.FromSqlRaw("SELECT * FROM Users WHERE userName = {0}", username);

            bool result =  _context.Users.Any(x => x.userName == username);
            return result;
            
        }

        public string generateToken(string user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,user),
                
            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials);


            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public string hashPassword(Users user, string password)
        {
            throw new NotImplementedException();
        }

        public async Task<Users> LoginCheck(string username, string password, string email)
        {
            Users result = await _context.Users.FirstOrDefaultAsync(x => (x.userName == username || x.Email == email) && x.Password == password);
            return result;
        }
    }
}
