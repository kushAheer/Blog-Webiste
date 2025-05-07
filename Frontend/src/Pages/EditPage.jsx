import EditProfileComp from "../Components/Authentication/Edit/EditProfileComp";
import ProfilePage from "./ProfilePage";

function EditPage(){
    return (
        <React.Fragment>
            <EditProfileComp/>
        </React.Fragment>
    )
}


export default EditPage;    


export async function EditAction({request}){
    const formData = await request.formData();
    const data = {
        fullName : formData.get('name'),
        userName : formData.get('userName'),
        Email : formData.get('email'),
        mobileNumber : formData.get('mobileNumber'),
        profileImage : formData.get('profileImage')
    }; 
    

    return null;

}


export function EditLoader(){
    return null;
}