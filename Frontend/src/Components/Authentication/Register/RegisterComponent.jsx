import { useEffect, useReducer, useRef, useState } from 'react';
import classes from './RegisterComp.module.css'
import React from 'react';
import {Form, NavLink, useActionData } from 'react-router-dom'


function RegisterComponent() {

    
    const data = useActionData();
    


    return (
        <React.Fragment>
            <div className = {'d-flex mb-3  justify-content-center'}>
                <div className={`pt-5 column-gap-3 ${classes.adjustWidth}`}>
                    <div className={`g-col-md-12 text-center `}>
                        <h1 className={`${classes.fontsize}`}>Create Account</h1>
                    </div>
                    <Form  method='POST'className='row'>

                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Full Name</label>
                            <input type='text' className={`${classes.inputItem} form-control`}  required placeholder='Full Name' name='name'/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>User Name</label>
                            <input type='text' name='userName' className={`${classes.inputItem} form-control`} required  placeholder='User Name'/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Email</label>
                            <input type='email'  className={`${classes.inputItem} form-control `}  required name='email' placeholder='E-mail'/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Mobile Number</label>
                            <input type='number'className={`${classes.inputItem} form-control`} name='mobileNumber' required placeholder='Mobile Number'/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Password</label>
                            <input type='password' className={`${classes.inputItem} form-control`} name='password' required placeholder='Password'/>
                            
                        </div>
                        <div className='pt-2'>
                            {data && <p>{data.message}</p>}
                        </div>
                        <div className='row'>
                            <div className='col-md-12 pt-3'>
                                <button type='submit'  className={`${classes.button}   cursor-pointer text-center  text-lg px-4 rounded-5 mt-4 text-white w-100`}>Register</button>    
                            </div>
                        </div>
                    </Form>
                    <div className='pt-5 col-md-12'>
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <p>Already have an account ?
                                <NavLink to='/login' className={`${classes.textColor} text-decoration-none `}> Login Here</NavLink>
                                </p>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default RegisterComponent