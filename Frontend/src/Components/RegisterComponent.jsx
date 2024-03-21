import classes from './RegisterComp.module.css'
import image from '../assets/Images/registerLogin.png'
function RegisterComponent() {


    const submitHandler = (e) => {
        e.preventDefault();
    }



    return (
        <div>
            <div className={classes.main}>
                {/* <div className=''> */}
                    <div className={classes.mainLeft}>
                        {/* <div className='col-md-6'> */}
                            <div className={classes.registerWrap}>
                                <div className={classes.registerForm}>
                                    <div className={"row"}>
                                        <div className='col-md-12'>
                                            <h1>Register</h1>
                                        </div>
                                        <form onSubmit={submitHandler}>
                                            <div className='col-md-12'>
                                                <label htmlFor='name'>Full Name</label>
                                                <input className={classes.input} type='text' id='name' name='name' placeholder='Full Name' />
                                            </div>
                                            <div className='col-md-12'>

                                                <label htmlFor='userName'>User Name</label>
                                                <input className={classes.input} type='text' id='userName' name='userName' placeholder='User Name' />
                                            </div>
                                            <div className='col-md-12'>

                                                <label htmlFor='email'>Email</label>
                                                <input className={classes.input} type='email' id='email' name='email' placeholder='Email' />
                                            </div>
                                            <div className='col-md-12'>
                                                <label htmlFor='password'>Password</label>
                                                <input className={classes.input} type='password' id='password' name='password' placeholder='Password' />
                                            </div>
                                            <button className={classes.registerButton} type='submit'>Register</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className={classes.mainRight}>
                        <div className={`col-md-6 ${classes.imageBackground}`}>
                            <img src={image} />
                        </div>
                    </div>

                    
                {/* </div> */}
            </div>
        </div>
    )

}

export default RegisterComponent