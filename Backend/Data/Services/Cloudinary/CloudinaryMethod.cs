using System.Runtime.CompilerServices;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.Extensions.Configuration;

namespace Backend.Data.Services.Cloudinary;

public class CloudinaryMethod : ICloudinaryServices
{
    private readonly CloudinaryDotNet.Cloudinary _cloudinary;
    
    public CloudinaryMethod(IConfiguration configuration)
    {
        // Create a Cloudinary account instance using the settings from appsettings.json
        Account account = new Account(
            configuration["Cloudinary:CloudName"],
            configuration["Cloudinary:ApiKey"],
            configuration["Cloudinary:ApiSecret"]
        );
        
        _cloudinary = new CloudinaryDotNet.Cloudinary(account);
        _cloudinary.Api.Secure = true;
    }
    
    public async Task<string> addProfilePicture(IFormFile file)
    {
        var uploadParams = new  ImageUploadParams()
        {
            File = new FileDescription(file.FileName, file.OpenReadStream()),
            Transformation = new Transformation().AspectRatio("1.0").Crop("fill").Chain()
                .Radius("max").Chain().FetchFormat("auto"),
        };
            
        var uploadResult =  _cloudinary.Upload(uploadParams);
            
        var url = uploadResult.Url.ToString();
            
        
            
         
        return url;
    }

    public async Task<string> addPostImage(IFormFile file)
    {
        var uploadParams = new ImageUploadParams()
        {
            File = new FileDescription(file.FileName, file.OpenReadStream()),
            Transformation = new Transformation().Width(650).Height(350).FetchFormat("auto"),
        };
            
        var uploadResult = _cloudinary.Upload(uploadParams);
            
        var url = uploadResult.Url.ToString();
            
        
            
         
        return url;
    }
}