import { redirect } from 'react-router-dom';
import LoginComponent from '../Components/Authentication/Login/LoginComponent';
import { responseLogin } from '../Services/PostApi';
import store from '../Services/Data/store';   
import { userSlice } from '../Services/Data/Slices/UserSlice';

function LoginPage() {
    
  return (
    <div>
      <LoginComponent />
    </div>
  );
}

export default LoginPage;



export async function LoginAction({ request }) {
    
  

    const formData = await request.formData();
    
    const data = {
      username : formData.get('userName'),
      password : formData.get('password'),
      
    };
  
    
    const responseData = await responseLogin(data);
    console.log(responseData);
    
    if(responseData.status === 200) {
      //dispatch(userSlice.actions.setUser(responseData));
      //dispatch(userSlice.actions.setToken(responseData.token));
      store.dispatch(userSlice.actions.login(responseData));
      
      localStorage.setItem('token', responseData.token);
      
  
      return redirect('/');
  
    } 
    
  
    return responseData;
  }