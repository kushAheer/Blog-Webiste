import { Form, useLoaderData, useParams, useSearchParams } from "react-router-dom";
import classes from './PostById.module.css';
import Like from "../../UI/Like/Like";
import { useState } from "react";
import CommentList from "../../UI/CommentBox/CommentList";
import ButtonUi from "../../UI/Button/Button";

function PostByIdComponent(props) {

    const data = useLoaderData();

    const [alreadyLiked, setAlreadyLiked] = useState(data.isLiked.result);
    const [totalLike, setTotalLike] = useState(data.postData.post.totalLikes);


    const user = JSON.parse(localStorage.getItem('user'));

    const increaseLike = async () => {
        console.log("increase like")

        setTotalLike((prev) => prev + 1);

        setAlreadyLiked(true);

        console.log(user.id);

        await fetch(`https://localhost:7098/api/LikeConroller/POST/Add?postId=${data.postData.post.id}&userId=${user.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    const removeLike = async () => {
        console.log("remove like")
        setTotalLike((prev) => prev - 1);
        setAlreadyLiked(false);
        console.log(user.id);
        await fetch(`https://localhost:7098/api/LikeConroller/DELETE/Remove?postId=${data.postData.post.id}&userId=${user.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })

    }
    return (

        <>
            <div className={`pt-5`}>
                <div className={`row `} >
                    <div className="col-md-6 offset-md-3 offset-sm-12 col-sm-12 ps-4" >
                        <div className={`${classes.border} `}>
                            <img src={data.postData.user.image} alt="..." className={`img-fluid `} />
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
                        <div className="col-md-12 pt-5">
                            <p>{data.postData.post.summary}</p>
                        </div>
                        {props.children}
                        <div>
                            <Form method="POST">
                                <input className="form-control" name="comment" id="comment" rows="3"></input>
                                <ButtonUi type={"submit"}>Send</ButtonUi>
                            </Form>
                            <CommentList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostByIdComponent;