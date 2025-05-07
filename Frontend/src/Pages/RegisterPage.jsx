import { redirect } from "react-router-dom";
import RegisterComponent from "../Components/Authentication/Register/RegisterComponent"
import { responseRegister } from "../Services/PostApi";

function RegisterPage(){
  
    return(
        <div>
            <RegisterComponent />
        </div>
    )
}

export default RegisterPage


export async function RegisterAction({request}) {
    
    const formData  = await request.formData();
  
    const data = {
        fullName : formData.get('name'),
        userName : formData.get('userName'),
        Email : formData.get('email'),
        mobileNumber : formData.get('mobileNumber'),
        password : formData.get('password')
    }; 
    
    const responseData  = await responseRegister(data)
    if(responseData.status === 200){
        
        return redirect('/login');
    }
    else{
        alert("Registration Failed");

        
    }   
    return responseData;
}