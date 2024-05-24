import React from "react";
import classes from './HeroBanner.module.css'
import { Link } from "react-router-dom";


function HeroBanner() {
    return (
        <>
            <div className={`${classes.background} `}>
                <div className="container pt-5">
                    <div className={`d-md-flex justify-content-center flex-column mb-3 align-items-center pt-0`}>
                        <div className={`p-2 flex-fill ${classes.content}`}>
                            <h1 className={`${classes.h1Edit}`}>Discover Blogs and Many More!</h1>
                        </div>
                        <div className="pt-4 flex-fill">
                            <p className={`${classes.p}`}>create your blog and see others also</p>

                        </div>
                        <div className="p-5 d-flex justify-content-center align-items-center">

                            <button className={`${classes.button}`}><Link to={'/post/add'} style={{textDecoration : 'none' , color : 'white'}}>Create Your Blog</Link></button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}


export default HeroBanner;