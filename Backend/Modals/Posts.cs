using System.ComponentModel.DataAnnotations;

namespace BlogWeb.Modals
{
    public class Posts
    {
        [Key]
        public int Id { get; set; }

        public string likesId { get; set; }

        public string commentId { get; set; }
        public string userId { get; set; }

        public string Title { get; set; }
        public string Image { get; set; }
        public string Summary { get; set; }
        public string Category { get; set; }
        public int totalLikes { get; set; }


        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
        public bool isDeleted { get; set; }
    }
}
