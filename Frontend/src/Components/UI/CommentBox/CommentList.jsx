import './CommentList.css';

function CommentList() {
    return (
        <React.Fragment>
        <div className="actionBox">
            <ul className="commentList">
                <li>
                    <div className="commenterImage">
                        <img src="http://placekitten.com/50/50" />
                    </div>
                    <div className="commentText">
                        <p className="">Hello this is a test comment.</p> <span className="date sub-text">on March 5th, 2014</span>
                    </div>
                </li>
            </ul>
        </div>
        </React.Fragment>
    )
}

export default CommentList;