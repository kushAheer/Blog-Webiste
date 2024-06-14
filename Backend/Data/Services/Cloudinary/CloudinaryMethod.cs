using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using dotenv.net;

namespace Backend.Data.Services.Cloudinary;

public class CloudinaryMethod : ICloudinaryServices
{
    private readonly CloudinaryDotNet.Cloudinary _cloudinary;
    public CloudinaryMethod()
    {
        DotEnv.Load(options: new DotEnvOptions(probeForEnv: true));
        CloudinaryDotNet.Cloudinary cloudinary = new CloudinaryDotNet.Cloudinary(Environment.GetEnvironmentVariable("CLOUDINARY_URL"));
        cloudinary.Api.Secure = true;
        
        _cloudinary = cloudinary;
        
    }
    
    public async Task<string> addProfilePicture(IFormFile file)
    {
        var uploadParams = new ImageUploadParams()
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