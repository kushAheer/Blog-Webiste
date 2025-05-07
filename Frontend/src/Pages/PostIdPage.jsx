
import { redirect } from "react-router-dom";
import NotFoundComp from "../Components/Error/NotFoundComp";
import PostByIdComponent from "../Components/Post/Get/PostByIdComponent";
import { getPostById, postLiked , commentData } from "../Services/GetApi";
import { responseCreateComment } from "../Services/PostApi";

function PostIdPage(){
    return (
        <React.Fragment>
            <PostByIdComponent>
                {/* <CommentsComp/> */}
            </PostByIdComponent>
        </React.Fragment>
    )
}

export default PostIdPage;


export async function CommentAction({request , response , params}){
    const formData  = await request.formData();
    
    const data = {
        postId : params.id,
        userId : JSON.parse(localStorage.getItem('user')).id,
        message : formData.get('comment')
    };
    
    const res = await responseCreateComment(data);
    

    return null;
}

export async function postIdLoader({params}){

    if(localStorage.getItem('user') === null){
        return redirect('/login');
    }

    const data = await getPostById(params.id);
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const commentList = await commentData(data.post.id);

    const isLiked = await postLiked(data.post.id , userId);

    
    if(data === null ){
        return <NotFoundComp    />
    }
    
    return {postData : data ,isLiked , commentData : commentList.data};
}