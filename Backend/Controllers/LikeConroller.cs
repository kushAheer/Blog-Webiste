using Backend.Data.Error;
using Backend.Data.Services.Like;
using Backend.Data.Services.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]

public class LikeConroller : ControllerBase
{
    private readonly ILikeServices _likeServices;
    private readonly IPostServices _postServices;
    public LikeConroller(ILikeServices likeServices , IPostServices postServices)
    {
        _likeServices = likeServices;
        _postServices = postServices;
    }
    // GET
    [HttpPost("Add")]
    [Authorize]
    public IActionResult POST(int postId , int userId)
    {
        try
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }

            
            

            _likeServices.AddLikeByPostId(postId, userId);
            return Ok(new {
                status = 200,
                message = "Like Added Successfully",
            });
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
        
    }

    [HttpDelete("Remove")]
    [Authorize]
    public IActionResult DELETE(int postId , int userId)
    {
        try
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }
            
            _likeServices.DeletedLikeByPostId(postId,userId);
            return Ok(new {
                status = 200,
                message = "Like Added Successfully",
            });
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
        
        
    }
    [HttpGet("IsLiked")]
    [Authorize]
    public IActionResult GET(int postId , int userId)
    {
        try
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }
            
            bool result = _likeServices.isLiked(postId, userId);
            return Ok(new {
                status = 200,
                result,
            });
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}