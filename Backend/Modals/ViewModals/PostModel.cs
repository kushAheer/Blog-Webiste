namespace Backend.Modals.ViewModals
{
    public class PostModel
    {
        public int? Id { get; set; }

        
        public int userId { get; set; }

        public string Title { get; set; }
        public IFormFile Image { get; set; }
        public string Summary { get; set; }
        public string Category { get; set; }
        


    }
}
