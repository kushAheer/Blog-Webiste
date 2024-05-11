using Backend.Data.Error;
using Backend.Data.Services.Like;
using Backend.Data.Services.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
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
    [HttpPost]
    [Authorize]
    public IActionResult POST(int postId , int userId)
    {
        try
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }

            var post = _postServices.PostById(postId);

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
}