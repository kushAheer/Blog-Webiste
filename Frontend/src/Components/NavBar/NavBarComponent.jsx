import { Link } from "react-router-dom";
import classes from './NavBarComp.module.css'
import {Dropdown} from 'react-bootstrap';

import store from "../../Services/Data/store";
import { userSlice } from "../../Services/Data/Slices/UserSlice";
import { useEffect, useState } from "react";

function NavBarComponent({isToken}) {

    
    const [token, setToken] = useState();
    const [user , setProfileImage] = useState();
    const logOut = ()=>{
        setToken(null);
        setProfileImage('');
        store.dispatch(userSlice.actions.logout());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
    }
    useEffect(()=>{
        
        setToken(localStorage.getItem('token'));
        setProfileImage(JSON.parse(localStorage.getItem('user')));
        if(isToken){
            setToken(isToken);
            
        }
    },[isToken]);

    return (
        <>

            <nav className={`navbar navbar-expand-lg  ${classes.container}`}>
                <div className={`container`}>


                    <Link to={'/'} className="navbar-brand" >Navbar</Link>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    
                    {!token && 
                        <div className={`d-md-flex ${classes.cont}`}> 
                            <div className="item">
                                <Link to="/Register" className={`${classes.signUp}`}>Sign Up</Link>
                            </div>
                            <div className="item">
                                <Link to="/Login" className={`${classes.login}`}>Login</Link>
                            </div>
                            
                        </div>
                    }
                    
                    {/* {isToken && <div><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log Out</button></div>} */}
                    {token && 
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