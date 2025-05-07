import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import RegisterPage, { RegisterAction } from "./Pages/RegisterPage";
import HomePage, { PostLoader } from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import { tokenLoader } from "./utils/auth";
import CreatePostPage from "./Pages/CreatePostPage";
import { LoginAction } from "./Pages/LoginPage";
import ProfilePage, { ProfileLoader } from "./Pages/ProfilePage";
import { useSelector } from "react-redux";
import NotFoundComp from "./Components/Error/NotFoundComp";
import PostIdPage, { CommentAction, postIdLoader } from "./Pages/PostIdPage";
import EditPage, { EditAction, EditLoader } from "./Pages/EditPage";
import { useNavigate } from "react-router-dom";

function App() {

  

  const auth = useSelector(state => state.users.user);
  
  const router = createBrowserRouter([
    {
     id : "layout",
     element: <Layout/>,
     path : "/",
     loader : tokenLoader,
     children : [

      {index : true, element: <HomePage/>, loader : PostLoader},
      {path : "/register", element: auth ? <Navigate to={'/'}/> :  <RegisterPage/>, action : RegisterAction},
      {path : "/login", element: auth ?  <Navigate to={'/'}/> : <LoginPage/> , action : LoginAction},
      {path : '/edit/:id', element : auth ?  <EditPage/> : <Navigate to={'/login'}/>,loader : EditLoader , action : EditAction},
      {path : '/profile',element:  auth ?  <ProfilePage/>: <Navigate to={'/login'}/>,loader : ProfileLoader},
      {path : "/post", 
  
      children : [
        {path: "add", element: auth ?  <CreatePostPage/> : <Navigate to={'/login'}/>,},
        {path: ":id", element: auth ?  <PostIdPage/> : <Navigate to={'/login'}/> , action : CommentAction ,loader : postIdLoader ,}
     ]}
    ]},
    {path : "*", element : <NotFoundComp/>},
  ]);

  return (    
    
    <RouterProvider router={router} />

  )
}

export default App
