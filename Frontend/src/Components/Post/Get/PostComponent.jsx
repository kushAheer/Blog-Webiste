import { useLoaderData } from "react-router-dom";
import CardUi from "../../UI/Card/CardUi";
function PostComponent() {
    const data  = useLoaderData();
    
    return (
        <>
            
            <div className="container pt-5">
                <div className="row">
                
                {data.map((post) => {
                    return (
                        <div key={post.id} className=" col-lg-3 col-md-4 col-sm-6 col-xs-12 w-0 p-2">
                            <CardUi
                                token = {localStorage.getItem("token")}
                                image = {post.image}
                                title = {post.title}
                                summary = {post.summary}
                                id = {post.id}
                            />
                        </div>
                        )
                    }
                )}
                </div>
            </div>
        </>
  );
}

export default PostComponent;


