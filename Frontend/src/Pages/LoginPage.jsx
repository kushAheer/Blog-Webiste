import { redirect } from 'react-router-dom';
import LoginComponent from '../Components/Authentication/Login/LoginComponent';
import { responseLogin } from '../Services/PostApi';

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
    
    localStorage.setItem('token', responseData.token);
    localStorage.setItem('user', JSON.stringify(responseData));

    return redirect('/');

  } 
  

  return responseData;
}