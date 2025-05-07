namespace Backend.Modals.ViewModals;

public class CommentModel
{
    public int commentId { get; set; }
    public int postId { get; set; }
    
    public string userName { get; set; }
    
    public string comment { get; set; }
    
    public string profileImage { get; set; }
    
    public string date { get; set; }
    
}