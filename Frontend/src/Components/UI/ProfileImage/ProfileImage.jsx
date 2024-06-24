function ProfileImage() {
    return (

        <div className="profile-pic">
            <label className="-label" for="file">
                <span className="glyphicon glyphicon-camera"></span>
                <span>Change Image</span>
            </label>
            <input id="file" type="file" onchange="loadFile(event)" />
            <img src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg" id="output" width="200" />
        </div>
    )
}

export default ProfileImage;