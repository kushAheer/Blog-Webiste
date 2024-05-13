using System.Formats.Asn1;
using System.Security.Claims;
using Backend.Data.Error;
using Backend.Data.Services.Post;
using Backend.Modals.ViewModals;
using BlogWeb.Modals;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace Backend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        

        private readonly IPostServices _postServices;
        public PostController(IPostServices postServices)
        {
            _postServices = postServices;
        }

        
        
        [HttpPost]
        
        [Authorize]
        public async Task<IActionResult> Create([FromForm]PostModel postData)
        {
            try
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
                postVal.Image = path;
                postVal.createdAt = DateTime.Now;
                postVal.modifiedAt = DateTime.Now;
                postVal.isDeleted = false;
                postVal.totalLikes = 0;
                
                _postServices.AddToDataBase(postVal);
                
            
            


                return Ok(new {
                    status = 200,
                    message = "Post Added Successfully",
                    image = path,
                    title = postVal.Title,
                    summary = postVal.Summary,
                    category = postVal.Category,
                });

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GET()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }
            
            List<Posts> posts = await _postServices.AllPosts();
            return Ok(new
            {
                status = 200,
                posts = posts
            });
        }

        [HttpGet("Id")]
        [Authorize]
        public async Task<IActionResult> GET(int Id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new Error(202, "All Fields Are Required "));
            }
            Posts post = await _postServices.PostById(Id);
            if (post == null)
            {
                return BadRequest(new Error(404, "Post Not Found"));
            }
            return Ok(new
            {
                status = 200,
                post = post,
            });
        }
    }
}
