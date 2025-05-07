import classes from './CreatePostComp.module.css'
import { Editor } from "@tinymce/tinymce-react";
import { lazy, useState } from 'react';
import { useNavigation } from 'react-router-dom';
function CreatePostComp({ onSubmit }) {

    const [value, setValue] = useState('');
    const [text , setText] = useState('');
    const navigation  = useNavigation();
    const isSubmiting = navigation.state === "submitting";
    
    

    const submitHandler = (e) => {

        e.preventDefault();
        const form = e.target;
        
        const data = {
            Title: form.title.value,
            Summary: value,
            Category: form.category.value,
            Image: form.image.files[0],
            userId: JSON.parse(localStorage.getItem('user')).id,
            text:text
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
                        <input type="text" required className={`form-control ${classes.inputItem}`} placeholder="Enter Title" name="title" />
                    </div>
                    <div className="col-md-12 pt-3">
                        <label className='pb-3'>Description</label>
                        <Editor
                        required
                        apiKey='c8hc1azkkivzoswbcmbs8hx1dtwkfxlfbi2lj98n10hn2dex'
                            value={value}
                            
                            onEditorChange={(newValue, editor) => {
                                setValue(newValue);
                                setText(editor.getContent({format: 'text'}));
                            }}
                        />
                        
                    </div>
                    <div className="col-md-12 pt-3 ">
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
                        <input type="file" className="form-control" required placeholder="Cover Image" name="image" />
                    </div>
                    <div className="col-md-12 pt-5 pb-5">
                        
                        <button type='submit'  disabled={isSubmiting} className={`${classes.button} cursor-pointer text-center  text-lg px-4 rounded-5 mt-4 text-white w-100`}>{isSubmiting ? "Submiting":"Create"}</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreatePostComp;