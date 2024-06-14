using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlogWeb.Backend.Modals
{
    public class Users
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string userName { get; set; }
        [Required]
        public string Password { get; set; }
        public string? profileImage { get; set; }
        [Required]
        public string fullName { get; set; }
        
        public int? mobileNumber { get; set; }
        [Required]
        public string Email { get; set; }

        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
        public bool isDeleted { get; set; }

        public string? Token { get; set; }

        

    }
}
