# 📝Blog Website

A full-stack blogging platform built with **React**, **.NET Core**, and **SQL Server**.

---

## 🚀 Features

- **User Authentication**: Secure login and registration system  
- **Post Management**: Create, edit, and delete blog posts  
- **Rich Text Editing**: Markdown and WYSIWYG editor support  
- **Image Upload**: Post images with Cloudinary integration  
- **User Profiles**: Customizable user profiles with avatar support  
- **Like System**: Interactive post likes and engagement tracking  
- **Responsive Design**: Works on desktop and mobile devices  

---

## 🛠️ Tech Stack

### Frontend
- React  
- Vite  
- Redux (State Management)  
- React Router (Navigation)  
- TinyMCE (Rich Text Editor)  

### Backend
- ASP.NET Core  
- Entity Framework Core  
- SQL Server  
- JWT Authentication  
- Cloudinary (Image Storage)  

---

## 📋 Prerequisites

- Node.js (v16+)  
- .NET 8.0  
- SQL Server  
- Cloudinary account  

---

## ⚙️ Installation

### 🔧 Backend Setup

```bash
git clone https://github.com/kushAheer/Blog-Webiste.git
cd Blog-Webiste/Backend
```

Create an `appsettings.json` file with the following structure:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=BlogWeb;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "Jwt": {
    "Key": "YOUR_SECRET_KEY",
    "Issuer": "YourAppIssuer",
    "Audience": "YourAppAudience",
    "DurationInMinutes": 60
  },
  "Cloudinary": {
    "CloudName": "YOUR_CLOUD_NAME",
    "ApiKey": "YOUR_API_KEY",
    "ApiSecret": "YOUR_API_SECRET"
  }
}
```

Run the following commands to apply migrations and create tables:

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

Run the backend:

```bash
dotnet run
```

> Make sure `dotnet-ef` is installed globally. If not, install it using:  
> `dotnet tool install --global dotnet-ef`

### 💻 Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

---

## 🖥️ Development

- **Backend API**: [https://localhost:7098](https://localhost:7098)  
- **Frontend Dev Server**: [http://localhost:3000](http://localhost:3000)  
- API proxying is configured in Vite for seamless integration  

---

## 🚢 Deployment

### Build Frontend

This will generate the production-ready frontend in the `wwwroot` directory.

### Deploy Backend

Deploy the ASP.NET Core application to your preferred hosting platform (Azure, AWS, etc.).

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Contributors

- Kush Aheer

---

## 🙏 Acknowledgements

- [TinyMCE](https://www.tiny.cloud/) for rich text editing  
- [Cloudinary](https://cloudinary.com/) for image management  
- [Bootstrap](https://getbootstrap.com/) for UI styling  

Feel free to contribute by submitting issues or pull requests!
