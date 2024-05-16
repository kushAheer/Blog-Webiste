import { Link } from 'react-router-dom';
import classes from './CardUi.module.css';

function CardUi(props) {

    return (
        <>
            <div className="card" style={{width : '16rem'}}>
                <img src={props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className={`card-text ${classes.summary}`}>{props.summary}</p>
                        <Link to={`/post/${props.id}`} className={classes.learnMore}>Learn More </Link>
                    </div>
            </div>
        </>
    )
}

export default CardUi;