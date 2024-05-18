import './Button.css';
function ButtonUi(props){
    return(
        <button className="buttonUi">{props.children}</button>
    )
}

export default ButtonUi;