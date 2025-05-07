export function getAuthToken(){
    const token  = localStorage.getItem('token');
    return token;
}

export function removeAuthToken(){
    localStorage.removeItem('token');
}

export function tokenLoader(){
    return getAuthToken();
}