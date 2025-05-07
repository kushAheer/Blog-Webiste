// Purpose: The file contains the functions that are used to make API calls to the backend for the user registration, user login and post creation.
const responseRegister = async (data) => {
    
    return await fetch("/api/User/Register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());

}

const responseLogin = async (data) => {
    return await fetch(`/api/User/Login?username=${data.username}&password=${data.password}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());

}

const responseCreatePost = async (data) => {

    

    const formData = new FormData();
    formData.append('Title', data.Title);
    formData.append('Summary', data.Summary);
    formData.append('Category', data.Category);
    formData.append('Image', data.Image);
    formData.append('userId', data.userId);
    formData.append('text', data.text);
    return await fetch(`/api/Post/Create`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'contentType': 'multipart/form-data'
        },
        body: formData
    }).then(response => response.json());
}

const responseCreateComment = async (data) => {
    return await fetch(`/api/Comment/POST/Add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}


const responseEditUserDetails = async (data) => {

    

    const formData = new FormData();
    formData.append('name', data.fullName);
    formData.append('userName', data.userName);
    formData.append('email', data.email);
    formData.append('mobileNumber', data.mobileNumber);
    formData.append('profileImage', data.profileImage);
    return await fetch(`/api/User/Edit/${data.id}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'contentType': 'multipart/form-data'
        },
        body: formData
    }).then(response => response.json());
}






export { responseRegister, responseLogin, responseCreatePost, responseCreateComment ,responseEditUserDetails };