import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import RegisterPage, { RegisterAction } from "./Pages/RegisterPage";
import HomePage, { PostLoader } from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import { tokenLoader } from "./utils/auth";
import CreatePostPage, { CreatePostAction } from "./Pages/CreatePostPage";
import { LoginAction } from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  
  const router = createBrowserRouter([
    {
     id : "layout",
     element: <Layout/>,
     path : "/",
     loader : tokenLoader,
     children : [
      {index : true, element: <HomePage/>, loader : PostLoader},
      {path : "/register", element: <RegisterPage/>, action : RegisterAction},
      {path : "/login", element: <LoginPage/> , action : LoginAction},
      {path : '/profile',element:<ProfilePage/>},
      {path : "/post",
      children : [
        {path: "add", element: <CreatePostPage/>,action : CreatePostAction},
     ]}
    ]},
  ]);

  return (    
    
    <RouterProvider router={router} />

  )
}

export default App
