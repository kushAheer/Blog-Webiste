using Backend.Data.Error;
using Backend.Data.Services.Post;
using Backend.Modals.ViewModals;
using BlogWeb.Modals;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing.Constraints;

namespace Backend.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        

        private readonly IPostServices _postServices;
        public PostController(IPostServices postServices)
        {
            _postServices = postServices;
        }

        [HttpPost]
        [Route("Add")]
        public async Task<IActionResult> Post(PostModel postData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }
            Posts postVal = new Posts();
            postVal.userId = postData.userId;

            if(postData.Summary.Length > 100)
            {
                return BadRequest(new Error(202, "Summary Should Be Less Than 100 Characters"));
            }
            if(postData.Title.Length > 30)
            {
                return BadRequest(new Error(202, "Title Should Be Less Than 30 Characters"));
            }
            if(postData.Category.Length > 20)
            {
                return BadRequest(new Error(202, "Category Should Be Less Than 20 Characters"));
            }

            if(postData.Image == null)
            {
                return BadRequest(new Error(202, "Image Is Required"));
            }


            postVal.Title = postData.Title;
            postVal.Summary = postData.Summary;
            postVal.Category = postData.Category;
            
            string path = await _postServices.uploadImage(postData.Image);
            postVal.Image = postData.Image.FileName;
            postVal.createdAt = DateTime.Now;
            postVal.modifiedAt = DateTime.Now;
            postVal.isDeleted = false;
            postVal.totalLikes = 0;
            
            
            


            return Ok(new {
                status = 200,
                message = "Post Added Successfully",
                image = path,
                title = postVal.Title,
                summary = postVal.Summary,
                category = postVal.Category,
            });
        }

        [HttpGet]
        public async Task<IActionResult> GET()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }

            return Ok();
        }

        [HttpGet("Id")]
        public async Task<IActionResult> GET(int Id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }

            return Ok();
        }
    }
}
