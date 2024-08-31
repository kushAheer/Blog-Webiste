import { Link } from "react-router-dom";
import classes from './NavBarComp.module.css'
import {Dropdown} from 'react-bootstrap';

import store from "../../Services/Data/store";
import { userSlice } from "../../Services/Data/Slices/UserSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function NavBarComponent() {

    const user = useSelector(state => state.users.user);
    
    const logOut = ()=>{
        
        store.dispatch(userSlice.actions.logout());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
    }

    return (
        <>

            <nav className={`navbar navbar-expand-lg  ${classes.container}`}>
                <div className={`container`}>


                    <Link to={'/'} className="navbar-brand" >KA</Link>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    
                    {!user && 
                        <div className={`d-md-flex ${classes.cont}`}> 
                            <div className="item">
                                <Link to="/Register" className={`${classes.signUp}`}>Sign Up</Link>
                            </div>
                            <div className="item">
                                <Link to="/Login" className={`${classes.login}`}>Login</Link>
                            </div>
                            
                        </div>
                    }
                    
                    
                    {user && 
                        <Dropdown>
                            <Dropdown.Toggle as="a" id="dropdown-basic">
                            <img src={user.profileImage} alt="Profile" style={{height: '45px', borderRadius: '50%'}} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link to="/profile" className="dropdown-item">Profile</Link>
                                <Link to="post/add" className="dropdown-item">Create Post</Link>
                                <Link to="/" className="dropdown-item" onClick={logOut}>Log Out</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </div>
            </nav>
        </>
    );
}

export default NavBarComponent;