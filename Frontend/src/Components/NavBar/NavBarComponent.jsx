import { Link } from "react-router-dom";
import classes from './NavBarComp.module.css'
import {Dropdown} from 'react-bootstrap';
import profileImage from "../../assets/Images/profilePic.jpg";
import store from "../../Services/Data/store";
import { userSlice } from "../../Services/Data/Slices/UserSlice";
import { useEffect, useState } from "react";
function NavBarComponent({isToken}) {

    
    const [token, setToken] = useState();
    const logOut = ()=>{
        setToken(null);
        store.dispatch(userSlice.actions.logout());
        localStorage.removeItem('token');
        
    }
    useEffect(()=>{
        
        setToken(localStorage.getItem('token'));
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
                        <div>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
                        </div>
                    }
                    
                    {/* {isToken && <div><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log Out</button></div>} */}
                    {token && 
                        <Dropdown>
                            <Dropdown.Toggle as="a" id="dropdown-basic">
                            <img src={profileImage} alt="Profile" style={{height: '45px', borderRadius: '50%'}} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link to="/profile" className="dropdown-item">Profile</Link>
                                <Link to="post/add" className="dropdown-item">Create Post</Link>
                                <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </div>
            </nav>
        </>
    );
}

export default NavBarComponent;