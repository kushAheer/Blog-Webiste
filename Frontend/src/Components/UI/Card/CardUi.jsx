function CardUi(props) {
    return (
        <>
            <div className="card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.summary}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}