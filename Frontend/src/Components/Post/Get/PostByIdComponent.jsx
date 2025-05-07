import { Form, useLoaderData, useParams, useSearchParams } from "react-router-dom";
import classes from './PostById.module.css';
import Like from "../../UI/Like/Like";
import { useRef, useState } from "react";
import CommentList from "../../UI/CommentBox/CommentList";
import ButtonUi from "../../UI/Button/Button";
import { useSelector } from "react-redux";

function PostByIdComponent(props) {

    const data = useLoaderData();
    const [commentInput, setCommentInput] = useState("");
    const [alreadyLiked, setAlreadyLiked] = useState(data.isLiked.result);
    const [totalLike, setTotalLike] = useState(data.postData.post.totalLikes);


    const user = useSelector(state => state.users.user);

    const increaseLike = async () => {
        

        setTotalLike((prev) => prev + 1);

        setAlreadyLiked(true);


        await fetch(`/api/LikeConroller/POST/Add?postId=${data.postData.post.id}&userId=${user.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    const removeLike = async () => {
        
        setTotalLike((prev) => prev - 1);
        setAlreadyLiked(false);
        
        await fetch(`/api/LikeConroller/DELETE/Remove?postId=${data.postData.post.id}&userId=${user.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })

    }

    const content = data.postData.post.summary;
    
    
    
    return (

        <>
            <div className={`pt-5`}>
                <div className={`row `} >
                    <div className="col-md-6 offset-md-3 offset-sm-12 col-sm-12 ps-4" >
                        <div className={`${classes.border} `}>
                            <img src={data.postData.user.profileImage} alt="..." className={`img-fluid `}style={{height: '45px', borderRadius: '50%'}} />
                            <h5 className="p-1">{data.postData.user.userName}</h5>
                            <div onClick={alreadyLiked ? removeLike : increaseLike}>
                                <Like isLiked={alreadyLiked} />
                                {totalLike}
                            </div>
                        </div>
                        <h1>{data.postData.post.title}</h1>
                        <div className="col-md-12 pt-5">
                            <img src={`${data.postData.post.image}`} alt="..." className={`img-fluid rounded-5`} />
                        </div>
                        <div className="col-md-12 pt-5" dangerouslySetInnerHTML={{__html : content}}>
                            {/* <textarea className={`form-control ${classes.textArea}`} value={content} readOnly></textarea > */}

                        </div>
                        {props.children}
                        <div>
                            <Form method="POST" className="row">
                                <div className="col-md-10">
                                    <input className="form-control" name="comment" id="comment" value={commentInput} onChange={(e)=>{setCommentInput(e.target.value)}} rows="2"></input>
                                </div>
                                <ButtonUi type={"submit"} classes={"col-md-2"} onClick = {()=>{setTimeout(()=>{setCommentInput("")},2000)}}>Send</ButtonUi>
                            </Form>
                            <CommentList 
                                
                             />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostByIdComponent;