import React from "react";
import classes from './ProfileComp.module.css'; // Import the CSS file

function ProfileComp() {
    return (
        <React.Fragment>
            <div classNameName="container pt-5">
                <div className="row">
                    <div className={`${classes.left} col-lg-4`}>
                        <div>
                            <img className={`${classes.photo}`} width={'50px'} src="https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        </div>
                        <h4 className={`${classes.name}`}>Jane Doe</h4>
                        <p className={`${classes.info}`}>jane.doe@gmail.com</p>
                        <p className={`${classes.desc}`}>Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I really enjoy photography and mountains.</p>
                    </div>
                    <div className={`col-lg-8 ${classes.right}`} >
                        <h1>Posts</h1>
                        <div className={`row ${classes.gallery}`}>
                            <div className="col-md-4">
                                <img className={`${classes.img}`} src="https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            </div>
                            <div className="col-md-4">
                                <img className={`${classes.img}`} src="https://images.pexels.com/photos/861034/pexels-photo-861034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            </div>
                            <div className="col-md-4">
                                <img className={`${classes.img}`} src="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            </div>
                            <div className="col-md-4">
                                <img className={`${classes.img}`} src="https://images.pexels.com/photos/5049/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            </div>
                            <div className="col-md-4">
                                <img className={`${classes.img}`} src="https://images.pexels.com/photos/428431/pexels-photo-428431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            </div>
                            <div className="col-md-4">
                                <img className={`${classes.img}`} src="https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileComp;