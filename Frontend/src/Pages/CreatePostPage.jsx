import CreatePostComp from "../Components/Post/Create/CreatePostComp";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { responseCreatePost } from "../Services/PostApi";

function CreatePostPage(props){
    
    const navigate = useNavigate();
    

    const Submit =async (data) =>{
        
        
        const responseData = await responseCreatePost(data);
        
        
        if (responseData.status === 200) {
                
            navigate('/');
        } 
        
        return {responseData};
    }
    return (
        <div>
            <CreatePostComp 
            onSubmit ={Submit}/>
        </div>
    );
}
export default CreatePostPage;