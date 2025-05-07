import { useLoaderData } from "react-router-dom";
import CardUi from "../../UI/Card/CardUi";
import { redirect } from "react-router-dom";

function PostComponent() {
    const data = useLoaderData();


    
    return (
        <>

            <div className="container pt-5">
                <div className="row">
                    {data.map((post) => {
                        return (
                            <div key={post.id} className=" col-lg-3 col-md-4 col-sm-6 col-6 p-2">
                                <CardUi
                                    cssClass={"cardUi"}
                                    token={localStorage.getItem("token")}
                                    image={post.image}
                                    title={post.title}
                                    summary={post.summary}
                                    text={post.editorText}
                                    id={post.id}
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


