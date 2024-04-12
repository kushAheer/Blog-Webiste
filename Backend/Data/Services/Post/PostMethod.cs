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

        public async Task<List<Posts>> UserPosts(int id)
        {
            return await _context.Posts.Where(x => x.userId == id).ToListAsync();
        }
    }
}
