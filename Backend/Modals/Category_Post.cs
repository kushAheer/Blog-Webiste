using System.ComponentModel.DataAnnotations.Schema;

namespace BlogWeb.Backend.Modals
{
    public class Category_Post
    {
        [ForeignKey("Post")]
        public int postId {  get; set; }

        [ForeignKey("Category")]
        public int categoryId { get; set; }

        public Posts post { get; set; }
        public Category category { get; set; }
    }
}
