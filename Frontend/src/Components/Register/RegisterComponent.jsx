import classes from './RegisterComp.module.css'

import {Link } from 'react-router-dom'

function RegisterComponent() {
    
    

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Hello")
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
        <div className = {'d-flex mb-3 sm-3 justify-content-center p-5'}>
            <div className={`grid pt-5 gap-0 column-gap-3 ${classes.adjustWidth}`}>
                
                <div className={`g-col-md-12 text-center `}>
                    <h1 className={`${classes.fontsize}`}>Create Account</h1>
                </div>
                <form className='row' onSubmit={submitHandler}>

                    <div className='col-md-12'>
                        <label className={`form-label ${classes.itemLablel}`}>Full Name</label>
                        <input type='text' className={`${classes.inputItem} form-control` } placeholder='Full Name' name='name'/>
                    </div>
                    <div className='col-md-12'>
                        <label className={`form-label ${classes.itemLablel}`}>User Name</label>
                        <input type='text' className={`${classes.inputItem} form-control `} name='userName' placeholder='User Name'/>
                    </div>
                    <div className='col-md-12'>
                        <label className={`form-label ${classes.itemLablel}`}>Email</label>
                        <input type='email' className={`${classes.inputItem} form-control `} name='email' placeholder='E-mail'/>
                    </div>
                    <div className='col-md-12'>
                        <label className={`form-label ${classes.itemLablel}`}>Mobile Number</label>
                        <input type='number' className={`${classes.inputItem} form-control `} name='number' placeholder='Mobile Number'/>
                    </div>
                    <div className='col-md-12'>
                        <label className={`form-label ${classes.itemLablel}`}>Password</label>
                        <input type='password' className={`${classes.inputItem} form-control  `} name='password' placeholder='Password'/>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 pt-3'>

                            <button type='submit' className={`${classes.button} cursor-pointer text-center  text-lg px-4 rounded-5 mt-4 text-white w-100`}>Register</button>
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
    )

}

export default RegisterComponent