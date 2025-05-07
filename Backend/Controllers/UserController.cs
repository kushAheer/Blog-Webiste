using BlogWeb.Backend.Data;
using BlogWeb.Backend.Modals;
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
using Backend.Data.Services.Cloudinary;
using Backend.Data.Services.User;
using Backend.Modals.ViewModals;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;


namespace BlogWeb.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UserController : ControllerBase
    {
        private readonly IUserServices _userServices;
        private readonly ICloudinaryServices _cloudinaryServices;
        
        
        public UserController(IUserServices userServices ,ICloudinaryServices cloudinaryServices)
        {
            _userServices = userServices;
            _cloudinaryServices = cloudinaryServices;
        }

        [HttpPost]
        [AllowAnonymous]
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
                if(!(userData.Email.Contains('@') && userData.Email.Contains('.')))
                {
                    return BadRequest(new Error(400, "Email Should Contain @"));
                }
                userVal.Email = userData.Email;

                string token = _userServices.generateToken(userData); 
                
                userVal.Token = token;

                userVal.profileImage = "https://res.cloudinary.com/kushaheer/image/upload/v1719516061/samples/zvwe8kue0a65d85xfs5a.png";
                

                userVal.fullName = userData.fullName;
                
                userVal.mobileNumber = userData.mobileNumber;
                
                
                userVal.createdAt = DateTime.Now;
                
                userVal.modifiedAt = DateTime.Now;
                
                userVal.isDeleted = false;



                

                _userServices.AddToDataBase(userVal);
                return Ok(new {
                    status = 200,
                    id = userVal.Id,
                    user = userVal.userName,
                    email = userVal.Email,
                    profileImage = userVal.profileImage,
                    fullName = userVal.fullName,
                    token = "",
                    expirationTokenTime = 30,
                }) ;

            }catch (System.Exception ex)
            {
             
                return new BadRequestResult();
            }

            
            
        }

    

        [HttpPost]
        [AllowAnonymous]
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
                
                string token  = _userServices.generateToken(user);
                return Ok(new
                {
                    status = 200,
                    id = user.Id,
                    user = user.userName,
                    email = user.Email,
                    profileImage = user.profileImage,
                    mobileNumber = user.mobileNumber,
                    fullName = user.fullName,
                    token = token,
                    expirationTokenTime = 30,
                });
                

            }catch (System.Exception)
            {
                return new BadRequestResult();
            }

            

        }
        [HttpPatch]
        
        [Authorize]
        public async Task<IActionResult> Edit([FromForm]EditUserModel updatedUser)
        {
            try
            {
                
                if(!ModelState.IsValid)
                {
                    return BadRequest(new Error(400, "All Fields Are Required"));
                }
                

                Users user = await _userServices.getUser(updatedUser.id);
                if(user == null)
                {
                    return BadRequest(new Error(202, "User Not Found"));
                }
                if(user.userName != updatedUser.userName)
                {
                    bool result  = _userServices.findUserName(updatedUser.userName);
                    if (result == true)
                    {
                        return BadRequest(new Error(202, "User Name Already Exists"));    
                    }
                    
                }
                
                if(user.Email != updatedUser.Email)
                {
                    bool result  = _userServices.findEmail(updatedUser.Email);
                    if (result == true)
                    {
                        return BadRequest(new Error(202, "Email Already Exists"));
                    }
                }

                user.userName = updatedUser.userName;
                
                user.fullName = updatedUser.fullName;
                
                string profileImage = await _cloudinaryServices.addProfilePicture(updatedUser.profileImage);
                user.profileImage = profileImage;
                user.mobileNumber = updatedUser.mobileNumber;
                user.modifiedAt = DateTime.Now;
                user.Email = updatedUser.Email;
                user.isDeleted = false;
                string token = _userServices.generateToken(user);
                user.Token = token;
                _userServices.updateProfile(user);
                   
                return Ok(new
                {
                    status = 200,
                    Id = user.Id,
                    userName = user.userName,
                    Email = user.Email,
                    profileImage = user.profileImage,
                    fullName = user.fullName, 
                    mobileNumber = user.mobileNumber,
                    token = token,
                    
                });

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            
        }
    }
    
}
