function SideBar(props){
    <div className="container sidebar">
        <div className="col-lg-4">
            {props.children}
        </div>
    </div>

}

export default SideBar;