const getPost = async ()=>{
    return await fetch(`https://localhost:7098/api/Post/GET`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }).then(response => response.json());
}

export { getPost };