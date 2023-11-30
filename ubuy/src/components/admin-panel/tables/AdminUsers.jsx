import "./Tables.css";

import * as userService from "../../../core/services/userService";
import { useContext, useEffect, useState } from "react";
import { parseError } from "../../../core/lib/errorParser";
import {
  SendErrorNotification,
  SendSuccessNotification,
} from "../../../core/notifications/notifications";
import { useNavigate } from "react-router-dom";
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
import AuthContext from "../../../core/contexts/authContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    userService
      .getUsers()
      .then(setUsers)
      .catch((error) => {
        let errors = parseError(error);

        errors.forEach((err) => {
          SendErrorNotification(err);
        });
      });
  }, []);

  const handleClose = () => {
    setDeleteDialog(false);
  };

  async function DeleteUser(profileId) {
    try {
      await userService.deleteProfile(profileId);

      handleClose();

      navigate("/admin/dashboard");

      SendSuccessNotification("Successfully deleted profile.");
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  }

  return (
    <>
      {users.length > 0 && (
        <table className="listings-table">
          <tr>
            <th>Email</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>

          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.email}</td>
              <td>
                {u.firstName} {u.lastName}
              </td>
              <td>{u.username}</td>
              <td>
                {u.role.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                  return g1.toUpperCase() + g2.toLowerCase();
                })}
              </td>
              <td className="listing-actions">
                <button onClick={() => navigate(`/users/${u._id}`)}>
                  <div className="icon">
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </div>
                  <div className="name">View</div>
                </button>
                <button
                  onClick={() => setDeleteDialog(true)}
                  disabled={
                    userId == u._id || u.role == "admin" || u.role == "owner"
                  }
                >
                  <div className="icon">
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                  <div className="name">Delete</div>
                </button>
              </td>

              <React.Fragment>
                <Dialog
                  open={deleteDialog}
                  TransitionComponent={Transition}
                  keepMounted
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
                      {`Delete profile (${u._id} - ${u.username})?`}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        id="alert-dialog-slide-description"
                        style={{
                          fontSize: "20px",
                          color: "white",
                        }}
                      >
                        Make sure you have selected the correct profile that you
                        want to delete. This action can not be undone!
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
                        onClick={() => DeleteUser(u._id)}
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
            </tr>
          ))}
        </table>
      )}

      {users.length == 0 && (
        <div className="no-return">There are no users to display!</div>
      )}
    </>
  );
};

export default AdminUsers;
