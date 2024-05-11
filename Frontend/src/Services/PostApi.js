// Purpose: The file contains the functions that are used to make API calls to the backend for the user registration, user login and post creation.
const responseRegister = async (data)=>{
    return await fetch("https://localhost:7098/api/User/Register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());

}

const responseLogin = async (data)=>{
    return await fetch(`https://localhost:7098/api/User/Login?username=${data.username}&password=${data.password}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
    
}
const responseCreatePost = async (data)=>{

    return await fetch(`https://localhost:7098/Post/Create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}
export { responseRegister , responseLogin , responseCreatePost};