import { Form, useLoaderData, useParams, useSearchParams } from "react-router-dom";
import classes from './PostById.module.css';
import Like from "../../UI/Like/Like";
import { useEffect, useState } from "react";

function PostByIdComponent(props) {
    const param = useParams();
    const data  = useLoaderData();
    const [like , setLike] = useState(0);
    useEffect(()=>{
        setLike(data.post.totalLikes);
    },[data.post.totalLikes])
    return (
        <>
            <div className={`pt-5`}>
                <div className={`row `} >
                    <div className="col-md-6 offset-md-3 offset-sm-12 col-sm-12 ps-4" >
                        <div className={`${classes.border} `}>
                            <img src={data.user.image} alt="..." className={`img-fluid `} />
                            <h5 className="p-1">{data.user.userName}</h5>
                            <div>
                                {like}
                                <Like
                                    userId ={data.post.userId} 
                                    postId = {data.post.id}
                                    />
                                    
                            </div>
                        </div>
                        <h1>{data.post.title}</h1>
                        <div className="col-md-12 pt-5">
                            <img src={`${data.post.image}`} alt="..." className={`img-fluid rounded-5`} />
                        </div>
                        <div className="col-md-12 pt-5">
                            <p>{data.post.summary}</p>
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostByIdComponent;