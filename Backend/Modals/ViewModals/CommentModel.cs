namespace Backend.Modals.ViewModals;

public class CommentModel
{
    public int postId { get; set; }
    
    public string userName { get; set; }
    
    public string comment { get; set; }
    
    public string profileImage { get; set; }
    
    public DateTime date { get; set; }
    
}