import axios from 'axios';

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

export { responseRegister , responseLogin};