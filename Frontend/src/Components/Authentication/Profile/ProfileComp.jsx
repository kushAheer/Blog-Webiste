import React from "react";
import classes from './ProfileComp.module.css'; // Import the CSS file
import ButtonUi from "../../UI/Button/Button";
import { NavLink, useLoaderData } from "react-router-dom";
function ProfileComp() {

    const data = useLoaderData();
    
    return (
        <React.Fragment>

            <div className="container pt-5">
                <div className="row">
                    <div className={`${classes.left} col-lg-4`}>
                        <div>
                            <img className={`${classes.photo}`} src={`${data.userData.profileImage}`} />
                        </div>
                        <h4 className={`${classes.name}`}>{data.userData.fullName}</h4>
                        <p className={`${classes.info}`}>{data.userData.email}</p>
                        {/* <p className={`${classes.desc}`}>Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I really enjoy photography and mountains.</p> */}
                    </div>
                    <div className={`col-lg-8 ${classes.right}`} >
                        <h1>Posts</h1>
                        <div className={`row ${classes.gallery}`}>

                            {data.postData.posts.map((item) => {
                                return (
                                    <div className="col-md-4" key={item.id}>
                                        <NavLink to={`/post/${item.id}`}><img className={`${classes.img}`} src={`${item.image}`} /></NavLink>
                                    </div>
                                    
                                )
                            }
                            )}
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-2 pt-2">

                        <NavLink to={`/edit/:${JSON.parse(localStorage.getItem('user')).id}`}><ButtonUi >Edit</ButtonUi></NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileComp;