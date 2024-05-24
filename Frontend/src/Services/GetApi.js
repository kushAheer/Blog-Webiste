const getPost = async ()=>{
    return await fetch(`https://localhost:7098/api/Post/GET`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }).then(response => response.json());
}

const getPostById = async (id)=>{
    return await fetch(`https://localhost:7098/api/Post/GET/${id}`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    }).then(response => response.json());
}



export { getPost , getPostById};