import ProfileComp from "../Components/Authentication/Profile/ProfileComp";

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
  return {
    message: "Profile Page",
  };
}