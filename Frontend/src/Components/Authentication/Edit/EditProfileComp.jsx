import classes from './EditProfileComp.module.css'
import { Form, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { responseEditUserDetails } from '../../../Services/PostApi';
function EditProfileComp() {

    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('user'));
    const [fullName, setFullName] = useState(data.fullName);

    const [userName, setUserName] = useState(data.user);
    const [email, setEmail] = useState(data.email);
    const [mobileNumber, setMobileNumber] = useState(data.mobileNumber);

    const submitHandler = async (e) => {
        console.log("SUBMIT")
        e.preventDefault();
        const userId = JSON.parse(localStorage.getItem('user')).id;
        const editData = {
            id: userId,
            fullName: fullName,
            userName: userName,
            email: email,
            mobileNumber: mobileNumber,
            profileImage: e.target.profileImage.files[0]
        }

        // const responseData = await responseEditUserDetails(editData);

        const formData = new FormData();
        formData.append('id', editData.id);
        formData.append('fullName', editData.fullName);
        formData.append('userName', editData.userName);
        formData.append('Email', editData.email);
        formData.append('mobileNumber', editData.mobileNumber);
        formData.append('profileImage', editData.profileImage);
        const responseData  = await fetch(`https://localhost:7098/api/User/Edit`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'contentType': 'multipart/form-data'
            },
            body: formData
        }).then(response => response.json());
        if (responseData.status === 200) {
            localStorage.setItem('user', JSON.stringify(responseData.data));
            localStorage.setItem('token', responseData.token);
            navigate('/');
        }

        return { responseData };

    }
    return (
        <React.Fragment>
            <div className={'d-flex mb-3  justify-content-center'}>
                <div className={`pt-5 column-gap-3 ${classes.adjustWidth}`}>
                    <div className={`g-col-md-12 text-center `}>
                        <h1 className={`${classes.fontsize}`}>Edit Account</h1>
                    </div>
                    <form className='row' onSubmit={submitHandler}>

                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Full Name</label>
                            <input type='text' className={`${classes.inputItem} form-control`} required placeholder='Full Name' name='name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>User Name</label>
                            <input type='text' name='userName' className={`${classes.inputItem} form-control`} required placeholder='User Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Email</label>
                            <input type='email' className={`${classes.inputItem} form-control `} required name='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Mobile Number</label>
                            <input type='number' className={`${classes.inputItem} form-control`} name='mobileNumber' required placeholder='Mobile Number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                        </div>
                        <div className='col-md-12'>
                            <label className={`form-label ${classes.itemLablel}`}>Full Name</label>
                            <input type='file' className={`${classes.inputItem} form-control`} required name='profileImage' />
                        </div>

                        <div className='pt-2'>
                            {data && <p>{data.message}</p>}
                        </div>
                        <div className='row'>
                            <div className='col-md-12 pt-3'>
                                <button type='submit' className={`${classes.button}   cursor-pointer text-center  text-lg px-4 rounded-5 mt-4 text-white w-100`}>Update Information</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )

}

export default EditProfileComp