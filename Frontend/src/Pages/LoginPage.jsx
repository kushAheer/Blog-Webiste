import LoginComponent from '../Components/Login/LoginComponent';
import { redirect } from 'react-router-dom';
import { responseLogin } from '../Services/PostApi';
import { useDispatch } from 'react-redux';

function LoginPage() {
  return (
    <div>
      <LoginComponent />
    </div>
  );
}

export default LoginPage;



export async function LoginAction({ request }) {
  
  console.log("data=================");

  const formData = await request.formData();
  
  const data = {
    username : formData.get('userName'),
    password : formData.get('password'),
    
  };

  
  const responseData = await responseLogin(data);
  console.log(responseData);
  
  if (responseData.status === 200) {
    
    localStorage.setItem('token', responseData.token);

    return redirect('/');
  } 
  

  return responseData;
}