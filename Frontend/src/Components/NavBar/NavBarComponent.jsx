import { Link } from "react-router-dom";
import classes from './NavBarComp.module.css'

function NavBarComponent() {
    return (
        <>
            {/* <nav className={`container-fluid ${classes.container}`}>
                <div className="row">
                    <div className=" col-md-12">
                        <div className="row">
                            <div className="col-md-10">
                                <ul className={`${classes.itemsContainer}`}>
                                    <li className={`${classes.item}`}>
                                        <Link to="/">Home</Link>
                                    </li>
                                
                                    <li className={`${classes.item}`}>
                                        <Link to="/">Blog</Link>

                                    </li>
                                
                                    <li className={`${classes.item}`}>
                                        <Link to="/">Home</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${classes.logIn} col-md-2`}>
                                    <button className={`${classes.button}`}>Login</button>
                                    <button className={`${classes.button} btn btn-primary`}>Register</button>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </nav> */}
            <nav className={`navbar navbar-expand-lg  ${classes.container}`}>
                <div className={`container`}>


                    <a className="navbar-brand" href="#">Navbar</a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBarComponent;