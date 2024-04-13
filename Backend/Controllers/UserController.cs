using BlogWeb.Data;
using BlogWeb.Modals;
using BlogWeb.Utils;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Primitives;
using Microsoft.Identity.Client;
using System.Net;
using Backend.Data.Error;
using Backend.Data.Services.User;


namespace BlogWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UserController : ControllerBase
    {
        private readonly IUserServices _userServices;

        public UserController(IUserServices userServices)
        {
            _userServices = userServices;
        }

        [HttpPost]
        public IActionResult Register(Users userData)
        {
            try
            {
                if (!ModelState.IsValid)
                {


                    return BadRequest(new Error(202, "All Fields Are Required "));
                }
                Users userVal = new Users();

                userData.userName = userData.userName.ToLower();
                userData.Email = userData.Email.ToLower();

                if(_userServices.findUserName(userData.userName) || _userServices.findEmail(userData.Email))
                {
                    return BadRequest(new Error(400, "UserName or Gmail Already Exists "));
                }
                
                userVal.userName = userData.userName;

                
                userVal.Password = userData.Password;
                if(!(userData.Email.Contains("@") && userData.Email.Contains(".")))
                {
                    return BadRequest(new Error(400, "Email Should Contain @"));
                }
                userVal.Email = userData.Email;

                string token = _userServices.generateToken(userVal.userName); 
                
                userVal.Token = token;

                userVal.profileImage = "https://images6.alphacoders.com/125/1258531.jpg";
                

                userVal.fullName = userData.fullName;
                
                userVal.mobileNumber = userData.mobileNumber;
                
                
                userVal.createdAt = DateTime.Now;
                
                userVal.modifiedAt = DateTime.Now;
                
                userVal.isDeleted = false;



                

                _userServices.AddToDataBase(userVal);
                return Ok(new 
                {
                    status = 200,
                    user = userVal.userName,
                    email = userVal.Email,
                    profileImage = userVal.profileImage,
                    fullName = userVal.fullName,
                    token = userVal.Token
                }) ;

            }catch (System.Exception)
            {
                return new BadRequestResult();
            }

            
            
        }

        private Exception HttpResponseException(HttpStatusCode badRequest, string v)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<IActionResult> Login(string username, string password)
        {
            try
            {
                if (username == null && password == null)
                {
                    return BadRequest(new Error(400, "All Fields Are Required"));
                }
                Users user = await  _userServices.LoginCheck(username, password);
                
                if(user == null)
                {
                    return BadRequest(new Error(400, "User Name or Password Is Incorrect"));
                }   
                return Ok(new
                {
                    status = 200,
                    id = user.Id,
                    user = user.userName,
                    email = user.Email,
                    profileImage = user.profileImage,
                    fullName = user.fullName,
                    token = user.Token
                });
                


            }catch (System.Exception)
            {
                return new BadRequestResult();
            }

            return Ok();

        }
    }
    
}
