using BlogWeb.Data;
using BlogWeb.Data.Services;
using BlogWeb.Modals;
using BlogWeb.Utils;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Primitives;
using Microsoft.Identity.Client;


namespace BlogWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserServices _userServices;

        public UserController(IUserServices userServices)
        {
            _userServices = userServices;
        }

        [HttpPost]
        public IActionResult Regsiter(Users userData)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return new BadRequestResult();
                }
                Users userVal = new Users();

                userData.userName = userData.userName.ToLower();
                userData.Email = userData.Email.ToLower();

                if(_userServices.findUserName(userData.userName))
                {
                    return new BadRequestResult();
                    
                }
                
                userVal.userName = userData.userName;

                
                userVal.Password = userData.Password;
                if(!(userData.Email.Contains("@") && userData.Email.Contains(".com")))
                {
                    return new BadRequestResult();
                }
                userVal.Email = userData.Email;

                string token = _userServices.generateToken(userVal.userName); 
                
                userVal.Token = token;
                
                userVal.profileImage = userData.profileImage;
                
                userVal.fullName = userData.fullName;
                
                userVal.mobileNumber = userData.mobileNumber;
                
                
                userVal.createdAt = DateTime.Now;
                
                userVal.modifiedAt = DateTime.Now;
                
                userVal.isDeleted = false;
                

                


                _userServices.AddToDataBase(userVal);
                return new OkResult();

            }catch (System.Exception)
            {
                return new BadRequestResult();
            }

            
            
        }

    }
    
}
