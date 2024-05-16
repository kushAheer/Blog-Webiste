import classes from './CreatePostComp.module.css'
import { Form } from "react-router-dom";
import { useState } from "react";
import { useSelector } from 'react-redux';
function CreatePostComp({onSubmit}) {
    
    
    const submitHandler =(e)=>{

        e.preventDefault();
        const form = e.target;
        console.log(e.target.title.value);
        const data ={
            Title : form.title.value,
            Summary : form.description.value,
            Category : form.category.value,
            Image : form.image.files[0],
            userId : JSON.parse(localStorage.getItem('user')).id
        }
        

        onSubmit(data);
    }
    return (
        <>
            <div className="container pt-5">
                <form onSubmit={submitHandler} className="row">
                    <div className="col-md-12">
                        <h1>Create Blog</h1>
                    </div>

                    <div className="col-md-12 pt-3">
                        <label>Ttile</label>
                        <input type="text" className={`form-control ${classes.inputItem}`} placeholder="Enter Title" name="title" />
                    </div>
                    <div className="col-md-12 pt-3">
                        <label>Description</label>
                        <input type="text" className="form-control" placeholder="Enter Description" name="description" />
                    </div>
                    <div className="col-md-12 pt-3">
                        <label>Category</label>
                        <select className="form-control" name="category">
                            <option >Event</option>
                            <option>Gaming</option>
                            <option>Coding</option>
                            <option>News</option>
                            <option>Anime</option>

                        </select>
                    </div>
                    <div className="col-md-12 pt-3">
                        <label>Image</label>
                        <input type="file" className="form-control" placeholder="Cover Image" name="image" />
                    </div>
                    <div className="col-md-12 pt-5">
                        <button type="submit" className={`${classes.button} w-100`}>Create Post</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreatePostComp;