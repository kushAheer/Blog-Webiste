import { useState } from 'react';
import classes from './LoginComp.module.css'
import { Link } from 'react-router-dom';

function Login(){

    const [emailOrUserName , setEmailOrUserName] = useState(true)


    return(
        <div className = {'d-flex mb-3 sm-3 justify-content-center p-5'}>
        <div className={`grid pt-5 gap-0 column-gap-3 ${classes.adjustWidth}`}>
            
            <div className={`g-col-md-12 text-center `}>
                <h1 className={`${classes.fontsize}`}>Login</h1>
            </div>
            <form className='row'>

                {emailOrUserName && <div className='col-md-12'>
                    <label className={`form-label ${classes.itemLablel}`}>User Name</label>
                    <input type='text' className={`${classes.inputItem} form-control `} name='userName' placeholder='User Name'/>
                </div>}

                {!emailOrUserName &&
                <div className='col-md-12'>
                    <label className={`form-label ${classes.itemLablel}`}>Email</label>
                    <input type='email' className={`${classes.inputItem} form-control `} name='email' placeholder='E-mail'/>
                </div>}
               
                <div className='col-md-12'>
                    <label className={`form-label ${classes.itemLablel}`}>Password</label>
                    <input type='password' className={`${classes.inputItem} form-control  `} name='password' placeholder='Password'/>
                </div>
                <div className='col-md-12 pt-3'>
                    <input type='checkbox' className='form-check-input' id='exampleCheck1' onClick={(e)=>{setEmailOrUserName((prev) => !prev)}}/>
                    <label className='form-check-label' htmlFor='exampleCheck1'>{emailOrUserName ? "Login With E-Mail" : "Login With User Name"}</label>
                </div>
                <div className='row'>
                    <div className='col-md-12 pt-3'>
                        <button type='submit' className={`${classes.button} cursor-pointer text-center  text-lg px-4 rounded-5 mt-4 text-white w-100`}>Register</button>
                    </div>

                    <div className='pt-5'>
                        <div className='row'>
                            <div className='col-md-8 text-end'>
                                <p>Already have an account ?</p>
                            </div>
                            <div className='col-md-4 text-start p-0'>
                                <Link to='/register' className={`${classes.textColor} text-decoration-none `}> Register Here</Link>

                            </div>

                        </div>
                    </div>
                </div>
            </form>
          
        </div>
        
    </div>
    )
}

export default Login;