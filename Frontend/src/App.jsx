import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <HomePage/>,},
    {path: "/register", element: <RegisterPage/>,},
  ]);

  return (
    
    <RouterProvider router={router} />
    
    
  )
}

export default App
