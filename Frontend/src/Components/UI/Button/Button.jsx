import './Button.css';
function ButtonUi(props){
    return(
        <button className={`buttonUi ${props.classes}`} onClick={props.onClick} type={props.type}>{props.children}</button>
    )
}

export default ButtonUi;