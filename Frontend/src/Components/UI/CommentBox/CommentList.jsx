import './CommentList.css';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
function CommentList() {
    const data = useLoaderData().commentData;
    const [comments, setComments] = useState(data);
    
    console.log(data);
    const deleteHandler = async (commentId) => {
        
        
        const response = await fetch(`https://localhost:7098/api/Comment/Delete?commentId=${commentId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            
        }
        else {
            const resData = await response.json();
            
            const updatedComments = comments.filter(comment => comment.commentId !== commentId);
            setComments(updatedComments);
        }
    }
    const user = JSON.parse(localStorage.getItem('user')).user;
    return (
        <React.Fragment>
            
            <div className="comments">
                {comments.map((item ,index) => (
                    <div className="list-comments" key={index}>
                        <div className='listContainer'>
                            <div>
                                <p><span className="username">{item.userName}</span> |  {item.date} </p>
                            </div>
                            <div>
                                 {(user == item.userName) ?  <p  onClick={()=>{ deleteHandler(item.commentId)}} style={{textDecoration : "none" , color : "red"}}>Remove</p> :""}
                            </div>
                        </div>
                        <p>{item.comment}</p>

                    </div>
                ))}

            </div>
        </React.Fragment>
    )
}

export default CommentList;