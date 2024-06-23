import './CommentList.css';
import { useLoaderData } from 'react-router-dom';
function CommentList() {

    const data = useLoaderData().commentData;
    console.log(data);

    return (
        <React.Fragment>
            {/* <div className="actionBox">
                <ul className="commentList">
                    {data.map((item) => (
                        <li>
                            <div className="commenterImage">
                                <img src={item.profileImage} />
                            </div>
                            <div className="commentText">
                                <p className="">{item.comment}</p> <span className="date sub-text">on {item.date}</span>
                            </div>
                        </li>
                    ))}

                </ul>
            </div> */}
            <div class="comments">
                {data.map((item) => (
                    <div class="list-comments">
                        <div>
                            <p><span class="username">{item.userName}</span> |  {item.date}</p>
                            <p>{item.comment}</p>
                        </div>
                    </div>
                ))}

            </div>
        </React.Fragment>
    )
}

export default CommentList;