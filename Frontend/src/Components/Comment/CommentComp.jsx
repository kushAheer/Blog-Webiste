import ButtonUi from "../UI/Button/Button"
import CommentList from "../UI/CommentBox/CommentList";
import { Form } from "react-router-dom";
function CommentsComp(props) {
    return (
        <React.Fragment>

            <div className="col-md-12 pt-5">
                <h1>Comments</h1>

                <Form className="row align-center" method="POST">
                    <div className="col-md-10">
                        <input type="text" required name='comment' className="form-control" placeholder="Enter your comment" />
                    </div>
                    <div className="col-md-2">
                        <ButtonUi type={"submit"}>Send</ButtonUi>
                    </div>
                </Form>
            </div>
            <div className="col-md-12 pt-5">
                <CommentList />
            </div>
        </React.Fragment>
    )
}

export default CommentsComp;