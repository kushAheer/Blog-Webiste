import classes from './EditProfileComp.module.css'
import { Form, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { navigate } from 'react-router-dom'
import { responseEditUserDetails } from '../../../Services/PostApi';
function EditProfileComp() {

    
    const data = JSON.parse(localStorage.getItem('user'));
    const [fullName, setFullName] = useState(data.fullName);
    
    const [userName, setUserName] = useState(data.user);
    const [email, setEmail] = useState(data.email);
    const [mobileNumber, setMobileNumber] = useState(data.mobileNumber);
    console.log(data);
    const submitHandler = async (e)=>{
        e.preventDefault();
        const data = {
            id : data.id,
            fullName : fullName,
            userName : userName,
            email : email,
            mobileNumber : mobileNumber,
            profileImage : e.target.profileImage.files[0]
        }
         
        const responseData = await responseEditUserDetails(data);
        
        
        if (responseData.status === 200) {
                
            navigate('/');
        } 
        
        return {responseData};
        
    }
    return (
        <React.Fragment>
            <div className = {'d-flex mb-3  justify-content-center'}>
                <div className={`pt-5 column-gap-3 ${classes.adjustWidth}`}>
                    <div className={`g-col-md-12 text-center `}>
                        <h1 className={`${classes.fontsize}`}>Edit Account</h1>
                    </div>
                    <div className='row'>

                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Full Name</label>
                            <input type='text' className={`${classes.inputItem} form-control`}  required placeholder='Full Name' name='name' value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>User Name</label>
                            <input type='text' name='userName' className={`${classes.inputItem} form-control`} required  placeholder='User Name' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Email</label>
                            <input type='email'  className={`${classes.inputItem} form-control `}  required name='email' placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Mobile Number</label>
                            <input type='number'className={`${classes.inputItem} form-control`} name='mobileNumber' required placeholder='Mobile Number' value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Full Name</label>
                            <input type='file' className={`${classes.inputItem} form-control`}  name='profileImage'  />
                        </div>
                        
                        <div className='pt-2'>
                            {data && <p>{data.message}</p>}
                        </div>
                        <div className='row'>
                            <div className='col-md-12 pt-3'>
                                <button type='submit' onSubmit={submitHandler} className={`${classes.button}   cursor-pointer text-center  text-lg px-4 rounded-5 mt-4 text-white w-100`}>Update Information</button>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default EditProfileComp