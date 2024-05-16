using BlogWeb.Data;
using BlogWeb.Modals;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data.Services.Post
{
    public class PostMethod : IPostServices
    {
        private readonly AppDbContext _context;
        public PostMethod(AppDbContext context)
        {
            _context = context;
        }
        public async void AddToDataBase(Posts postData)
        {
            await _context.Posts.AddAsync(postData);
            _context.SaveChanges();
        }

        public async Task<List<Posts>> AllPosts()
        {
           return  await _context.Posts.ToListAsync();

        }

        public async void DeletePost(int id)
        {
            _context.Posts.Remove(await  _context.Posts.FindAsync(id));
            
            _context.SaveChanges();
        }

        public async Task<Posts> PostById(int id)
        {
            return await _context.Posts.FirstOrDefaultAsync(x => x.Id == id);
            
        }

        public Task<List<Posts>> SearchPosts(string search)
        {
            throw new NotImplementedException();
        }

        public async Task<string> uploadImage(IFormFile file)
        {
            var extension = "." + file.FileName.Split('.')[file.FileName.Split('.').Length - 1];
            string fileName = DateTime.Now.Ticks.ToString() + extension;
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Assets/Images");

            if (!Directory.Exists(filePath))
            {
                Directory.CreateDirectory(filePath);
            }
            var exactpath = Path.Combine(filePath, fileName);
            using (var fileStream = new FileStream(exactpath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }
            return exactpath;
            
        }

        public bool isAvailable(int postId)
        {
            _context.Posts.FindAsync(postId);
            return true;
        }

        public async Task<List<Posts>> UserPosts(int id)
        {
            return await _context.Posts.Where(x => x.userId == id).ToListAsync();
        }
    }
}
