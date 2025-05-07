// using System.IdentityModel.Tokens.Jwt;
// using BlogWeb.Modals;
// using System.Security.Claims;
// using System.Text;
// using Microsoft.AspNetCore.Mvc.Filters;
// using Microsoft.Extensions.Primitives;
// using Microsoft.IdentityModel.Tokens;
//
// public class Auth : Attribute , IAuthorizationFilter
// {
//     private readonly IConfiguration _configuration;
//
//     // public Auth(IConfiguration configuration)
//     // {
//     //     _configuration = configuration;
//     //
//     // }
//     //
//     public void OnAuthorization(AuthorizationFilterContext context)
//     {
//         var token = context.HttpContext.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
//         if (token != null)
//         {
//             // Set the authenticated user
//             // var identity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, "username") }, "custom");
//             // context.User = new ClaimsPrincipal(identity);
//             AttachUserToContext(context.HttpContext,token);
//             // await next.Invoke(context);
//         }
//         else
//         {
//             // Handle authentication failure, e.g., redirect to login page
//             context.HttpContext.Response.Redirect("/login");
//             return;
//         }
//     }
//     private void AttachUserToContext(HttpContext context, string token)
//     {
//         try
//         {
//             var tokenHandler = new JwtSecurityTokenHandler();
//             var key = Encoding.ASCII.GetBytes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
//             tokenHandler.ValidateToken(token, new TokenValidationParameters
//             {
//                 ValidateIssuerSigningKey = true,
//                 IssuerSigningKey = new SymmetricSecurityKey(key),
//                 ValidateIssuer = false,
//                 ValidateAudience = false,
//                 // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
//                 ClockSkew = TimeSpan.Zero
//             }, out SecurityToken validatedToken);
//
//             var jwtToken = (JwtSecurityToken)validatedToken;
//             var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);
//
//             // attach user to context on successful jwt validation
//             context.Items["User"] = userId;
//         }
//         catch
//         {
//             // do nothing if jwt validation fails
//             // user is not attached to context so request won't have access to secure routes
//         }
//     }
//
//     
// }