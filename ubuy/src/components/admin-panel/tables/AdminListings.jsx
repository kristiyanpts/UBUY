import "./Tables.css";

import * as productService from "../../../core/services/productService";
import { useEffect, useState } from "react";
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

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdminListings = () => {
  const [products, setProducts] = useState([]);
  const [selectedListing, setSelectedListing] = useState({
    _id: "",
    name: "",
  });
  const [deleteDialog, setDeleteDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    productService
      .getProducts()
      .then(setProducts)
      .catch((error) => {
        let errors = parseError(error);

        errors.forEach((err) => {
          SendErrorNotification(err);
        });
      });
  }, []);

  const handleClose = () => {
    setSelectedListing({ _id: "", name: "" });
    setDeleteDialog(false);
  };

  async function DeleteListing() {
    try {
      await productService.deleteProduct(selectedListing._id);

      navigate("/admin/dashboard");

      handleClose();

      SendSuccessNotification("Product listing has been deleted successfully");
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  }

  return (
    <>
      {products.length > 0 && (
        <table className="listings-table">
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>

          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>${p.price}</td>
              <td>
                {p.category.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                  return g1.toUpperCase() + g2.toLowerCase();
                })}
              </td>
              <td className="listing-actions">
                <button onClick={() => navigate(`/market/${p._id}/details`)}>
                  <div className="icon">
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </div>
                  <div className="name">View</div>
                </button>

                <button
                  onClick={() => {
                    setSelectedListing(p);
                    setDeleteDialog(true);
                  }}
                >
                  <div className="icon">
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                  <div className="name">Delete</div>
                </button>
              </td>
            </tr>
          ))}

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
                  {`Delete product listing (${selectedListing._id} - ${selectedListing.name})?`}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-slide-description"
                    style={{
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    Make sure you have selected the correct product listing that
                    you want to delete. This action can not be undone!
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
                    onClick={DeleteListing}
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
        </table>
      )}

      {products.length == 0 && (
        <div className="no-return">There are no listings to display!</div>
      )}
    </>
  );
};

export default AdminListings;
