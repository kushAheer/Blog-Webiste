import './CommentList.css';
import { Link, useLoaderData } from 'react-router-dom';
function CommentList() {

    const data = useLoaderData().commentData;
    console.log(data);
    const deleteHandler = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://localhost:7098/api/Comment/DELETE/Remove?commentId=${data.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
    }
    const user = JSON.parse(localStorage.getItem('user')).user;
    return (
        <React.Fragment>
            
            <div className="comments">
                {data.map((item ,index) => (
                    <div className="list-comments" key={index}>
                        <div className='listContainer'>
                            <div>
                                <p><span className="username">{item.userName}</span> |  {item.date} </p>
                            </div>
                            <div>
                                 {(user == item.userName) ?  <p  onClick={deleteHandler} style={{textDecoration : "none" , color : "red"}}>Remove</p> :""}
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