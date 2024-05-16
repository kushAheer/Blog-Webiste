import { useParams, useSearchParams } from "react-router-dom";

function PostByIdComponent() {
    const param = useParams();

    return (
        <>
            <h1>{`PostByIdComponent ${param.id}`}</h1>
        
        </>
    );
}

export default PostByIdComponent;