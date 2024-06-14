using Backend.Data.Error;
using Backend.Data.Services.Comment;
using BlogWeb.Backend.Modals;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class CommentController : Controller
{
    private readonly ICommentServices _commentServices;
    public CommentController(ICommentServices commentServices)
    {
        _commentServices = commentServices;
    }
    
    // GET
    [HttpPost("Add")]
    public IActionResult POST(Comments commentData)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }

            if (commentData.Message.Length > 50)
            {
                return BadRequest(new Error(202, "Message Should Be Less Than 50 Characters"));   
            }

            Comments newCommentsData = new Comments();
            newCommentsData.Message = commentData.Message;
            newCommentsData.postId = commentData.postId;
            newCommentsData.userId = commentData.userId;
            newCommentsData.createdAt = DateTime.Now;
            newCommentsData.isDeleted = false;
            
            _commentServices.addComment(newCommentsData);
            
            
            
            return Ok(new
            {
                status = 200,
                message = "Comment Added Successfully",
            });
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
        
    }
    
}