namespace Backend.Modals.ViewModals;

public class EditUserModel
{
    public int id { get; set; }
    public string fullName { get; set; }
    public string userName { get; set; }
    public string Email { get; set; }
    public IFormFile profileImage { get; set; }
    public int mobileNumber { get; set; }
}