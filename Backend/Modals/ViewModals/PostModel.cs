namespace Backend.Modals.ViewModals
{
    public class PostModel
    {
        

        
        public int userId { get; set; }
        public string text { get; set; }
        public string Title { get; set; }
        public IFormFile Image { get; set; }
        public string Summary { get; set; }
        public string Category { get; set; }

    }
}
