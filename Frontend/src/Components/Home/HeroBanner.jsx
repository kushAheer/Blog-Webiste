import React from "react";
import classes from './HeroBanner.module.css'


function HeroBanner() {
  return (
    <>
    <div className={`${classes.background}`}>
        <div className="container pt-0">
            <div className={`d-md-flex justify-content-center flex-column mb-3 align-items-center pt-0`}>
                <div className ={`p-2 flex-fill ${classes.content}`}>
                    <h1 className={`${classes.h1Edit}`}>Discover Blogs and Many More!</h1>
                </div>
                <div className="p-2 flex-fill">
                    <p className={`${classes.p}`}>create your blog and see others also</p>

                </div>
                <div className="p-2 flex-fill">

                    <button className={`${classes.button}`}>Get Started</button>
                </div>
            </div>

            
        </div>
    </div>
    </>
  );
}


export default HeroBanner;