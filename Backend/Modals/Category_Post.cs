using System.ComponentModel.DataAnnotations.Schema;

namespace BlogWeb.Modals
{
    public class Category_Post
    {
        [ForeignKey("Post")]
        public int postId {  get; set; }

        [ForeignKey("Category")]
        public int categoryId { get; set; }
    }
}
