
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
    // const data = await getPostById(params.id);
    
    // console.log(data);
    return {
        Title : "Post 1",
        Summary : "Lorem ipsum dolor sitmet consectetur adipisicing elit. Eligendi repellat sed fugiat ducimus et minus harum tenetur consequatur, eveniet, inventore amet consectetur ipsam repellendus dolorem! Ut minima alias, praesentium non totam soluta nihil eum dolore eveniet! Inventore consectetur accusamus in, sequi id praesentium labore beatae perferendis, magni, officiis quasi unde reiciendis sit sed assumenda aspernatur debitis suscipit. Dicta, exercitationem assumenda inventore corporis facilis veniam aliquam beatae sint maxime distinctio. Commodi explicabo corrupti asperiores sint obcaecati dolores officia dignissimos in repellat natus provident perspiciatis nisi aliquam iste repellendus magni nulla magnam dolorem tempora, alias distinctio! Nisi consectetur placeat beatae quo rem?",
    };
}