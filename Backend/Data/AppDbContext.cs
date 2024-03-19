using BlogWeb.Modals;
using Microsoft.EntityFrameworkCore;

namespace BlogWeb.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { 
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category_Post>().HasKey(x => new { x.postId, x.categoryId });
        }

        public DbSet<Users> Users { get; set; }
        public DbSet<Posts> Posts { get; set; }
        public DbSet<Likes> Likes { get; set; }
        public DbSet<Comments> Comments { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Category_Post> Category_Posts { get; set; }

    }
}
