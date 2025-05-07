using System.ComponentModel.DataAnnotations;

namespace BlogWeb.Backend.Modals
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        
        public string categoryName { get; set; }
        
        public int parentCatId { get; set; }

        // public Category parentCategory { get; set; }

    }
}
