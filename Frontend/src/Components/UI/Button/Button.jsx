import './Button.css';
function ButtonUi(props){
    return(
        <button className="buttonUi" type={props.type}>{props.children}</button>
    )
}

export default ButtonUi;