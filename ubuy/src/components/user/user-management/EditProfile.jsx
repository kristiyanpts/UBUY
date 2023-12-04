import { useContext, useEffect, useState } from "react";
import "./UserManagement.css";
import { useNavigate, useParams } from "react-router-dom";

import * as userService from "../../../core/services/userService";
import {
  SendErrorNotification,
  SendSuccessNotification,
} from "../../../core/notifications/notifications";
import { parseError } from "../../../core/lib/errorParser";
import AuthContext from "../../../core/contexts/authContext";

const EditProfile = () => {
  const { userId } = useContext(AuthContext);
  const { profileId } = useParams();
  const [user, setUser] = useState({
    _id: "",
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    pfpUrl: "",
    role: "",
    products: [],
  });
  const navigate = useNavigate();

  if (userId != profileId) {
    navigate("/404");
  }

  useEffect(() => {
    userService
      .getProfileInfo(profileId)
      .then(setUser)
      .catch((error) => {
        console.log(error);
        SendErrorNotification("User does not exist.");

        navigate("/");
      });
  }, [profileId]);

  const onProfileEdit = async (e) => {
    e.preventDefault();

    // @ts-ignore
    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await userService.editProfileInfo(profileId, values);

      SendSuccessNotification("Profile information updated successfully.");

      navigate(`/users/${profileId}`);
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  };

  const onChange = (e) => {
    setUser((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="auth-form two-col" onSubmit={onProfileEdit}>
      <div className="auth-form-info">
        <div className="auth-form-title">Edit Your Profile</div>
        <div className="auth-form-desc">
          Edit all of the fields with the desired changes.
        </div>
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-id-badge icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="First Name"
          name="firstName"
          value={user.firstName}
          onChange={onChange}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-id-badge icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Last Name"
          name="lastName"
          value={user.lastName}
          onChange={onChange}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-envelope icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={onChange}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-user icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={onChange}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-image icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Profile Picture URL"
          name="pfpUrl"
          value={user.pfpUrl}
          onChange={onChange}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-cart-shopping icon"></i>
        <select
          name="role"
          id="role"
          className="auth-input"
          value={user.role}
          onChange={onChange}
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="admin" disabled>
            Admin
          </option>
          <option value="owner" disabled>
            Owner
          </option>
        </select>
      </div>

      <button className="auth-button">Edit Profile</button>
    </form>
  );
};

export default EditProfile;
