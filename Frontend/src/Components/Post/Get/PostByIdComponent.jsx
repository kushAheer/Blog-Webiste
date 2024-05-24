import { Form, useLoaderData, useParams, useSearchParams } from "react-router-dom";
import classes from './PostById.module.css';
import Like from "../../UI/Like/Like";

function PostByIdComponent(props) {
    const param = useParams();
    const data  = useLoaderData();
    return (
        <>
            <div className={`pt-5`}>
                <div className={`row `} >
                    <div className="col-md-6 offset-md-3 offset-sm-12 col-sm-12 ps-4" >
                        <div className={`${classes.border} `}>
                            <img src="https://via.placeholder.com/50" alt="..." className={`img-fluid rounded-5`} />
                            <h5 className="p-1">Name</h5>
                            <Like />
                        </div>
                        <h1>{data.title}</h1>
                        <div className="col-md-12 pt-5">
                            <img src="https://via.placeholder.com/300" alt="..." className={`img-fluid rounded-5`} />
                        </div>
                        <div className="col-md-12 pt-5">
                            <p>{data.summary}</p>
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostByIdComponent;