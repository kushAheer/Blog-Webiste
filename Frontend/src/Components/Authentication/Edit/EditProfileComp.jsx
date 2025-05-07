import classes from "./EditProfileComp.module.css";
import { Form, NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { responseEditUserDetails } from "../../../Services/PostApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser, userSlice } from "../../../Services/Data/Slices/UserSlice";
function EditProfileComp() {
	const navigate = useNavigate();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const data = useSelector((state) => state.users.user);

	const [fullName, setFullName] = useState(data.fullName);

	const [userName, setUserName] = useState(data.userName);
	const [email, setEmail] = useState(data.email);
	const [mobileNumber, setMobileNumber] = useState(data.mobileNumber);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	const submitHandler = async (e) => {
		e.preventDefault();
		setIsSubmitting(true); // Set submitting state to true

		try {
			// Your form submission code...
			const userId = JSON.parse(localStorage.getItem("user")).id;
			const editData = {
				id: userId,
				fullName: fullName,
				userName: userName,
				email: email,
				mobileNumber: mobileNumber,
				profileImage: e.target.profileImage.files[0],
			};

			const formData = new FormData();
			formData.append("id", editData.id);
			formData.append("fullName", editData.fullName);
			formData.append("userName", editData.userName);
			formData.append("Email", editData.email);
			formData.append("mobileNumber", editData.mobileNumber);
			formData.append("profileImage", editData.profileImage);

			const responseData = await fetch(`/api/User/Edit`, {
				method: "PATCH",
				headers: {
					Accept: "application/json",
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
				body: formData,
			}).then((response) => response.json());

			if (responseData.status === 200) {
                setError(null);
                dispatch(setUser(responseData));
                window.location.href = `/`;
            }else{
				setError(responseData.message);

            }

		} catch (error) {
			console.error("Error submitting form:", error);
		} finally {
			setIsSubmitting(false); // Reset submitting state
		}
	};
	return (
		<React.Fragment>
			<div className={"d-flex mb-3  justify-content-center"}>
				<div className={`pt-5 column-gap-3 ${classes.adjustWidth}`}>
					<div className={`g-col-md-12 text-center `}>
						<h1 className={`${classes.fontsize}`}>Edit Account</h1>
					</div>
					<form className="row" onSubmit={submitHandler}>
						<div className="col-md-12">
							<label
								className={`form-label ${classes.itemLablel}`}
							>
								Full Name
							</label>
							<input
								type="text"
								className={`${classes.inputItem} form-control`}
								required
								placeholder="Full Name"
								name="name"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
						</div>
						<div className="col-md-12">
							<label
								className={`form-label ${classes.itemLablel}`}
							>
								User Name
							</label>
							<input
								type="text"
								name="userName"
								className={`${classes.inputItem} form-control`}
								required
								placeholder="User Name"
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
							/>
						</div>
						<div className="col-md-12">
							<label
								className={`form-label ${classes.itemLablel}`}
							>
								Email
							</label>
							<input
								type="email"
								className={`${classes.inputItem} form-control `}
								required
								name="email"
								placeholder="E-mail"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="col-md-12">
							<label
								className={`form-label ${classes.itemLablel}`}
							>
								Mobile Number
							</label>
							<input
								type="number"
								className={`${classes.inputItem} form-control`}
								name="mobileNumber"
								required
								placeholder="Mobile Number"
								value={mobileNumber}
								onChange={(e) =>
									setMobileNumber(e.target.value)
								}
							/>
						</div>
						<div className="col-md-12">
							<label
								className={`form-label ${classes.itemLablel}`}
							>
								Profile Image
							</label>
							<input
								type="file"
								className={`${classes.inputItem} form-control`}
								required
								name="profileImage"
							/>
						</div>

						<div className="pt-2">
							{data && <p>{data.message}</p>}
							{error && <p>{error}</p>}
						</div>
						<div className="row">
							<div className="col-md-12 pt-3">
								<button
									type="submit"
									disabled={isSubmitting}
									className={`${classes.button} cursor-pointer text-center  text-lg px-4 rounded-5 mt-4 text-white w-100`}
								>
									{isSubmitting ? "Submitting" : "Update"}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
}

export default EditProfileComp;
