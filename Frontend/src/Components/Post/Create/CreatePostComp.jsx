import classes from  './CreatePostComp.module.css'
import { Form } from "react-router-dom";
function CreatePostComp() {

    return(
        <>
            <div className="container pt-5">
                <Form method="POST" className="row">
                    <div className="col-md-12">
                        <h1>Create Blog</h1>
                    </div>
                    
                    <div className="col-md-12 pt-3">
                        <label>Ttile</label>
                        <input type="text" className={`form-control ${classes.inputItem}`} placeholder="Enter Title" name="title"/>
                    </div>
                    <div className="col-md-12 pt-3">
                        <label>Description</label>
                        <input type="text" className="form-control" placeholder="Enter Description" name="description"/>
                    </div>
                    <div className="col-md-12 pt-3">
                        <label>Category</label>
                        <select className="form-control" name="category">
                            <option >Event</option>
                            <option>Gaming</option>
                            <option>Coding</option>
                            <option>News</option>
                            
                        </select>
                    </div>
                    <div className="col-md-12 pt-3">
                        <label>Image</label>
                        <input type="file" className="form-control" placeholder="Enter Category"name="category"/>
                    </div>
                    <div className="col-md-12 pt-5">
                        <button type="submit" className={`${classes.button} w-100`}>Create Post</button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default CreatePostComp;