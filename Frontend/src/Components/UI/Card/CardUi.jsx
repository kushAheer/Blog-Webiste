import { Link } from 'react-router-dom';
import classes from './CardUi.module.css';
import Like from '../Like/Like';
import { useEffect, useState } from 'react';
function CardUi(props, { cssClass ="cardUi" }) {
    const [like, setLike] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLike(true);
        }
    }, [like]);
    
    return (
        <>
            <div className={`card  ${classes.cssClass}`} >
                <img src={props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">{props.title}</h3>
                        <p className={`card-text ${classes.summary}`}>{props.text}</p>
                        <div className='d-flex'>
                            <div className='col-md-6'>

                                <Link to={`/post/${props.id}`} className={`${classes.learnMore}`}>Learn More</Link>
                            </div>
                            <div className='right col-md-6 offset-md-4'>
                                {/* {like && <Like />} */}
                            </div>
                        </div>
                        
                    </div>
            </div>

        </>
    )
}

export default CardUi;