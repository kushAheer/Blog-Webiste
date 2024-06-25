import ProfileComp from "../Components/Authentication/Profile/ProfileComp";
import { getPostUserId } from "../Services/GetApi";
function ProfilePage() {
  return (
    <React.Fragment>
      <ProfileComp/>
    </React.Fragment>
  );
}

export default ProfilePage;

// Loader
export async function ProfileLoader() {
  const userData = JSON.parse(localStorage.getItem('user'));
  console.log(userData);
  const postData = await getPostUserId(userData.id);
  if(postData == null){
    return "Not Found"
  }
  return {userData,postData}
}