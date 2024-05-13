import React from "react";
import classes from './ProfileComp.module.css'; // Import the CSS file
import { Form } from "react-bootstrap";

function ProfileComp() {
    return (
        <React.Fragment>
            <div className="container">
                <div className='d-md-flex'>
                    <Form method="PUT" className="">
                        <div className={`${classes.profilePic}`}>
                            <img className={`${classes.imgProfile}`} src="https://via.placeholder.com/150" alt="profile" />
                        </div>
                        <div className={`${classes.profileDetails}`}>
                            <div className="detailItem">
                                <label>Full Name</label>
                                <input type="text" className="inputVal" value="John Doe" readOnly />
                            </div>
                            <div className="detailItem">
                                <label>User Name</label>
                                <input type="text" value="John Doe" className="inputVal" readOnly />
                            </div>
                            <div className="detailItem">
                                <label>Email</label>
                                <input type="text" className="inputVal" value="123" />
                            </div>
                            <div className="detailItem">
                                <label>Phone</label>
                                <input type="text" className="inputVal" value="" />
                            </div>
                        </div>
                    </Form>

                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileComp;