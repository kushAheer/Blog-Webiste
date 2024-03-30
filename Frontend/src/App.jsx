import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
     element: <Layout/>,
     children: [
      {path: "/", element: <HomePage/>,},
      {path: "/register", element: <RegisterPage/>,},
      {path: "/login", element: <LoginPage/>,},
    ]},
    
  ]);

  return (
    
    <RouterProvider router={router} />
    
    
  )
}

export default App
