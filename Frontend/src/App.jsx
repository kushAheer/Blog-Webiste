import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import RegisterPage, { RegisterAction } from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import { tokenLoader } from "./utils/auth";
import CreatePostPage from "./Pages/CreatePostPage";
import { LoginAction } from "./Pages/LoginPage";

function App() {
  
  const router = createBrowserRouter([
    {
     id : "layout",
     element: <Layout/>,
     path : "/",
     loader : tokenLoader,
     children: [
      {index : true, element: <HomePage/>,},
      {path: "/register", element: <RegisterPage/>, action : RegisterAction},
      {path: "/login", element: <LoginPage/> , action : LoginAction},
      {path : "/post",
      children: [
        {path: "add", element: <CreatePostPage/>},
     ]}
    ]},
  ]);

  return (    
    
    <RouterProvider router={router} />

  )
}

export default App
