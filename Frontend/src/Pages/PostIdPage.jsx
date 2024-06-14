
import NotFoundComp from "../Components/Error/NotFoundComp";
import PostByIdComponent from "../Components/Post/GET/PostByIdComponent";
import { getPostById } from "../Services/GetApi";

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
        comment : formData.get('comment')
    };
    console.log(data);
    return null;
}

export async function postIdLoader({params}){
    const data = await getPostById(params.id);
    
    // console.log(data);
    if(data === null){
        return <NotFoundComp    />
    }
    return data;
}