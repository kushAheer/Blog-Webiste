using System.ComponentModel.DataAnnotations;

namespace BlogWeb.Modals
{
    public class Comments
    {
        [Key]
        public int Id { get; set; }
        public int postId { get; set; }
        public int userId { get; set; }
        public string Message {  get; set; }
        public DateTime createdAt { get; set; }
        public bool isDeleted { get; set; }
    }
}
