import { useLoaderData } from "react-router-dom";

function PostComponent() {
    const data  = useLoaderData();
    console.log(data);
    return (
        <>
            <h1>Post Component</h1>
        </>
  );
}

export default PostComponent;


