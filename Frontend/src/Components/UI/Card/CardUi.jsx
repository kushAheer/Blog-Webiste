import { Link, redirect } from 'react-router-dom';
import classes from './CardUi.module.css';


function CardUi(props, { cssClass ="cardUi" }) {
    
    
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