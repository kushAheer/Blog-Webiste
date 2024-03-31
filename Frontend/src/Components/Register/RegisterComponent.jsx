import { useEffect, useReducer, useRef, useState } from 'react';
import classes from './RegisterComp.module.css'
import React from 'react';
import {Link } from 'react-router-dom'

const useReducerData = (state, action) => {
    if(action.type == 'name') {
        return {
            
            ...state,
            enteredName: action.val1,
            nameIsValid: true
        }
    }else if(action.type == 'userName') {
        return {

            ...state,
            enteredUserName: action.val,
            userNameIsValid: true
        }
    }else if(action.type == 'email') {
        console.log("Reducer")
        
            return{
                ...state,
                enteredEmail: action.val,
                emailIsValid: true
            }
        
        
    }else if(action.type == 'password') {
        
            return {
                ...state,
                enteredpassword: action.val,
                passwordIsValid: true
            }
        
    }else if(action.type == 'mobile'){
        return {
            ...state,
            enteredMobile: action.val,
            mobileIsValid: true
        }
    
    }
}

const initialValidation = {
    nameIsValid: false,
    enteredName : "",

    userNameIsValid: false,
    enteredUserName: "",

    emailIsValid: false,
    enteredEmail: "",

    enteredpassword: "",
    passwordIsValid: false,

    enteredMobile: "",
    mobileIsValid: false
    
}

function RegisterComponent() {
    
    



    const [validationState, setValidationDispatch] = useReducer(useReducerData, initialValidation)
    const [submitIsValid , setSubmitIsValid] = useState(false);
    
    useEffect(() =>{
        console.log("Effect Running")
        if(validationState.enteredName.length > 0 && validationState.enteredUserName.length > 0 && validationState.enteredEmail.length > 0 && validationState.enteredpassword.length >= 8 && validationState.enteredMobile.length > 0){
             setSubmitIsValid(true)
        }else{
            setSubmitIsValid(false)
        }
    },[validationState.enteredName,validationState.enteredUserName,validationState.enteredEmail,validationState.enteredpassword , validationState.enteredMobile])
    const submitHandler = (e) => {
        e.preventDefault();
        
        const data = {
            fullName: e.target.name.value,
            userName: e.target.userName.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        const response = (async (data) => {
            const response = await fetch('https://localhost:7098/api/User/Regsiter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return response.json();
        })
        console.log(response(data))
        
    }

    

    return (
        <React.Fragment>
            <div className = {'d-flex mb-3 sm-3 justify-content-center'}>
                <div className={`grid pt-5 gap-0 column-gap-3 ${classes.adjustWidth}`}>
                    <div className={`g-col-md-12 text-center `}>
                        <h1 className={`${classes.fontsize}`}>Create Account</h1>
                    </div>
                    <form className='row' onSubmit={submitHandler}>

                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Full Name</label>
                            <input type='text' value={validationState.enteredName} onChange={(e)=>setValidationDispatch({type:'name',val1 : e.target.value})} className={`${classes.inputItem} form-control` } placeholder='Full Name' name='name'/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>User Name</label>
                            <input type='text' value={validationState.enteredUserName} onChange={(e)=>setValidationDispatch({type:'userName',val:e.target.value})}  className={`${classes.inputItem} form-control `} name='userName' placeholder='User Name'/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Email</label>
                            <input type='email' value={validationState.enteredEmail} onChange={(e)=>setValidationDispatch({type:'email',val:e.target.value})} className={`${classes.inputItem} form-control `} name='email' placeholder='E-mail'/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Mobile Number</label>
                            <input type='number'value={validationState.enteredMobile} onChange={(e)=>setValidationDispatch({type:'mobile',val:e.target.value})} className={`${classes.inputItem} form-control `} name='number' placeholder='Mobile Number'/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Password</label>
                            <input type='password' value={validationState.enteredpassword} onChange={(e)=>setValidationDispatch({type:'password',val:e.target.value})} className={`${classes.inputItem} form-control  `} name='password' placeholder='Password'/>
                            {!validationState.passwordIsValid && validationState.enteredpassword &&<p>Length Should be Greater Than 8</p>}
                        </div>
                        <div className='row'>
                            <div className='col-md-12 pt-3'>
                                <button disabled={!submitIsValid} type='submit'  className={`${classes.button}   cursor-pointer text-center  text-lg px-4 rounded-5 mt-4 text-white w-100`}>Register</button>    
                            </div>
                        </div>
                    </form>
                    <div className='pt-5'>
                        <div className='row'>
                            <div className='col-md-8 text-end'>
                                <p>Already have an account ?</p>
                            </div>
                            <div className='col-md-4 text-start p-0'>
                                <Link to='/login' className={`${classes.textColor} text-decoration-none `}> Login Here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default RegisterComponent