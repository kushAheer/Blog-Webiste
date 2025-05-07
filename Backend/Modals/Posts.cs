using System.ComponentModel.DataAnnotations;

namespace BlogWeb.Backend.Modals
{
    public class Posts
    {
        [Key]
        public int Id { get; set; }
        
        public int userId { get; set; }
        
        public string Title { get; set; }
        public string Image { get; set; }
        public string editorText { get; set; }
        public string Summary { get; set; }
        public string Category { get; set; }
        public int totalLikes { get; set; }


        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
        public bool isDeleted { get; set; }

        // public IEnumerable<Comments> comments { get; set; }
        //
        // public IEnumerable<Likes> likes { get; set; }   
        //
        // public Users user { get; set; }
    }
}
