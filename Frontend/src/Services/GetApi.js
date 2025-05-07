const getPost = async ()=>{
    return await fetch(`/api/Post/GET`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }).then(response => response.json());
}

const getPostById = async (id)=>{
    return await fetch(`/api/Post/GET/${id}`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    }).then(response => response.json());
}

const postLiked = async (postId , userId)=>{
    return await fetch(`/api/LikeConroller/GET/IsLiked?postId=${postId}&userId=${userId}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => response.json());
}

const commentData = async (postId)=>{
    return await fetch(`/api/Comment/GET?postId=${postId}`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),

        }
    }).then(response => response.json());

}
const getPostUserId = async (id)=>{
    return await fetch(`/api/Post/GETPostByUser/${id}`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    }).then(response => response.json());
}
export { getPost , getPostById ,postLiked , commentData , getPostUserId};