import { useNavigate, useParams } from "react-router-dom";
import "./Profile.css";
import { useContext, useEffect, useState } from "react";

import * as userService from "../../../core/services/userService";
import {
  SendErrorNotification,
  SendSuccessNotification,
} from "../../../core/notifications/notifications";
import AuthContext from "../../../core/contexts/authContext";
import Product from "../../../components/shared/product/Product";
import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
  const { profileId } = useParams();
  const { userId, logoutHandler } = useContext(AuthContext);
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
  const [deleteProfileDialog, setDeleteProfileDialog] = useState(false);

  const handleClose = () => {
    setDeleteProfileDialog(false);
  };

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

  async function DeleteProfile() {
    try {
      await userService.deleteProfile(profileId);

      handleClose();

      logoutHandler();

      navigate("/");

      SendSuccessNotification("Successfully deleted your profile.");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="profile-wrapper">
      <div className="title">{user.username}&apos;s Profile Information</div>
      <div className="profile-info">
        <div className="left-side">
          <img
            src={
              user.pfpUrl ||
              "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
            }
            alt=""
            className="pfp"
          />
        </div>
        <div className="right-side">
          <div className="info-field">
            <div className="side">Email:</div>
            <div className="side">{user.email}</div>
          </div>
          <div className="info-field">
            <div className="side">Full Name:</div>
            <div className="side">
              {user.firstName} {user.lastName}
            </div>
          </div>
          <div className="info-field">
            <div className="side">Role:</div>
            <div className="side">
              {user.role.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                return g1.toUpperCase() + g2.toLowerCase();
              })}
            </div>
          </div>
          <div className="info-field">
            <div className="side">Listed Products:</div>
            <div className="side">{user.products.length}</div>
          </div>
          {userId == user._id && (
            <div className="profile-controls">
              <button className="profile-control">Edit Profile</button>
              <button
                className="profile-control red"
                onClick={() => setDeleteProfileDialog(true)}
              >
                Delete Profile
              </button>
            </div>
          )}

          <React.Fragment>
            <Dialog
              open={deleteProfileDialog}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <Box
                sx={{
                  bgcolor: "darkred",
                  color: "white",
                }}
              >
                <DialogTitle
                  style={{
                    fontSize: "30px",
                  }}
                >
                  {"Are you sure you want to delete your profile?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-slide-description"
                    style={{
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    Deleting your account is a serious decision and an action
                    that can not be undone!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    style={{
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    No
                  </Button>
                  <Button
                    onClick={DeleteProfile}
                    style={{
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    Yes
                  </Button>
                </DialogActions>
              </Box>
            </Dialog>
          </React.Fragment>
        </div>
      </div>
      <div className="title">{user.username}&apos;s Listed Products</div>
      <div className="recent-products">
        {user.products.length > 0 &&
          user.products.map((product) => (
            <Product key={product._id} {...product}></Product>
          ))}

        {user.products.length == 0 && (
          <div className="no-return">There are no procuts to display!</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
