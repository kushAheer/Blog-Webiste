import { useEffect, useReducer, useState } from 'react';
import classes from './LoginComp.module.css'
import { Link ,Form, useActionData, useNavigation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../../Services/Data/Slices/UserSlice';

function Login(){

    const data = useActionData();
    const navigation  = useNavigation();
    const isSubmiting = navigation.state === "submitting";
    

    return(
    <div className = {'d-flex mb-3 sm-3 justify-content-center p-5'}>
        <div className={`grid pt-5 gap-0 column-gap-3 ${classes.adjustWidth}`}>
            
            <div className={`g-col-md-12 text-center `}>
                <h1 className={`${classes.fontsize}`}>Login</h1>
            </div>
            <Form className='row' method='POST'>

                <div className='col-md-12'>
                    <label className={`form-label ${classes.itemLablel}`}>User Name</label>
                    <input type='text' className={`${classes.inputItem} form-control `}  required name='userName' placeholder='User Name'/>
                </div>
                <div className='col-md-12'>
                    <label className={`form-label ${classes.itemLablel}`}>Password</label>
                    <input required className={`${classes.inputItem} form-control  `} name='password' placeholder='Password'/>
                </div>
                {data && <p className='pt-3'>{data.message}</p>}
                <div className='row'>
                    <div className='col-md-12 pt-0'>
                        <button type='submit' disabled={isSubmiting} className={`${classes.button} cursor-pointer text-center  text-lg px-4 rounded-5 mt-4 text-white w-100`}>{isSubmiting ? "Submiting":"Login"}</button>
                    </div>

                    <div className='pt-5'>
                        <div className='row'>
                            <div className='col-md-6 text-end'>
                                <p>Already have an account ?</p>
                            </div>
                            <div className='col-md-6 text-start p-0'>
                                <Link to='/register' className={`${classes.textColor} text-decoration-none `} type='submit'>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>        
    </div>
    )
}

export default Login;