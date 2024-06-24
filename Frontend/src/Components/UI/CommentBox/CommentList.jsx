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
            <div className="comments">
                {data.map((item ,index) => (
                    <div className="list-comments" key={index}>
                        <div>
                            <p><span className="username">{item.userName}</span> |  {item.date}</p>
                            <p>{item.comment}</p>
                        </div>
                    </div>
                ))}

            </div>
        </React.Fragment>
    )
}

export default CommentList;