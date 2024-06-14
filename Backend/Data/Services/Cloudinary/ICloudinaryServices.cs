namespace Backend.Data.Services.Cloudinary;

public interface ICloudinaryServices
{
    Task<string> addProfilePicture(IFormFile file);
    Task<string> addPostImage(IFormFile file);
}