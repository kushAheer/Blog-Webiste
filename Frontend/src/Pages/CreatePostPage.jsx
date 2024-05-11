import { useSelector } from "react-redux";
import CreatePostComp from "../Components/Post/Create/CreatePostComp";
import store from "../Services/Data/store";
import { redirect } from "react-router-dom";
import { useEffect } from "react";
import { responseCreatePost } from "../Services/PostApi";
function CreatePostPage(){
    const token = localStorage.getItem("token");
    useEffect(()=>{
        
        if(token === null){
            return redirect('/');
        }
    },[token])
    
    return (
        <div>
            <CreatePostComp/>
        </div>
    );
}

export default CreatePostPage;


// Action

export async function CreatePostAction({ request }) {
  
  console.log("data=================");

  const formData = await request.formData();
  // const userId = useSelector(state => state.user.id);
    const userId = JSON.parse(localStorage.getItem('user'));
    console.log(userId);
    const data = {
        userId : userId.id,
        Title : formData.get('title'),
        Summary : formData.get('description'),
        Category : formData.get('category'),
        Image : formData.get('image'),
    };
    console.log(data);
  
    const responseData = await responseCreatePost(data);
    console.log(responseData);
    
    if (responseData.status === 200) {
        
        return redirect('/');
    } 
    
    return responseData;
}