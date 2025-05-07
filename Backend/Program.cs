using System.Text;
using Backend.Data.Services.Cloudinary;
using Backend.Data.Services.Like;
using Microsoft.EntityFrameworkCore;
using BlogWeb.Backend.Data;
using Backend.Data;
using Backend.Data.Services.Comment;
using Backend.Data.Services.User;
using Backend.Data.Services.Post;
using BlogWeb.Backend.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using dotenv.net;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
    );





// Add services to the container.
builder.Services.AddScoped<IUserServices, UserMethods>();
builder.Services.AddScoped<IPostServices, PostMethod>();
builder.Services.AddScoped<ILikeServices , LikeMethod>();
builder.Services.AddScoped<ICloudinaryServices, CloudinaryMethod>();
builder.Services.AddScoped<ICommentServices, CommentMethod>();
// builder.Services.AddTransient<Auth>();
// builder.Services.AddScoped<Auth>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(opt =>
{
    opt.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
    opt.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Type = SecuritySchemeType.ApiKey,
        Name = "Authorization",
        Scheme = "Bearer",
        In = ParameterLocation.Header,
    });
    opt.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });

});

//JWT Token

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    var jwtKey = builder.Configuration["Jwt:Key"];
    if (string.IsNullOrEmpty(jwtKey))
    {
        throw new ArgumentNullException("Jwt:Key", "JWT Key is missing in configuration");
    }
    
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)),
        ClockSkew = TimeSpan.Zero,
    };
});
//Integrating Cloudinary And DotEnv Files


builder.Services.AddMvc();
builder.Services.AddControllers();
builder.Services.AddRazorPages();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseMiddleware<Auth>();
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
