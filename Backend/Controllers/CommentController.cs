using Backend.Data.Error;
using Backend.Data.Services.Comment;
using Backend.Modals.ViewModals;
using BlogWeb.Backend.Modals;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
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
    
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GET(int postId)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }

            List<CommentModel> comments = await _commentServices.getCommentListById(postId);
            
            return Ok(new
            {
                status = 200,
                message = "Comments Fetched Successfully",
                data = comments
            });
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
    [HttpDelete]
    [Authorize]
    public async Task<IActionResult> Delete(int commentId)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }
            
            Comments commentsData = await _commentServices.getCommentById(commentId);
            
            
            string status = _commentServices.deleteComment(commentsData);
            if (status == "Error")
            {
                return BadRequest(new Error(202, "Comment Not Found"));
            }
            
            return Ok(new
            {
                status = 200,
                message = "Comment Deleted Successfully",
            });
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
    
    
}