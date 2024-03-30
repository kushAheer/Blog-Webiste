import { Link } from "react-router-dom";
import classes from './NavBarComp.module.css'

function NavBarComponent() {
    return (
        <nav className="container-fluid">
            <div className="row">
                <div className=" col-md-12">
                    <div className="row">
                        <div className="col-md-10">
                            <ul className={`${classes.itemsContainer}`}>
                                <li className={`${classes.item}`}>
                                    <Link to="/">Home</Link>

                                </li>
                            
                                <li className={`${classes.item}`}>
                                    <Link to="/">Home</Link>

                                </li>
                            
                                <li className={`${classes.item}`}>
                                    <Link to="/">Home</Link>

                                </li>
                            </ul>

                        </div>
                        <div className={`${classes.logIn} col-md-2`}>
                            
                                <button className={`${classes.button} btn btn-primary`}>Login</button>
                                <button className={`${classes.button} btn btn-primary`}>Register</button>
                            

                        </div>
                    </div>

                
                </div>
                
            </div>
        </nav>
    );
}

export default NavBarComponent;