import "./AdminDashboard.css";

import * as productService from "../../../core/services/productService";
import * as userService from "../../../core/services/userService";
import { useEffect, useState } from "react";
import { parseError } from "../../../core/lib/errorParser";
import { SendErrorNotification } from "../../../core/notifications/notifications";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

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

  return (
    <>
      <div className="dashboard-splitter">
        <span>GENERAL INFO</span>
      </div>
      <div className="dashboard-info">
        <div className="info-item">
          <div className="icon">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="value">{users.length}</div>
          <div className="name">Users</div>
        </div>
        <div className="info-item">
          <div className="icon">
            <i className="fa-solid fa-clipboard-list"></i>
          </div>
          <div className="value">{products.length}</div>
          <div className="name">Listings</div>
        </div>
        <div className="info-item">
          <div className="icon">
            <i className="fa-regular fa-credit-card"></i>
          </div>
          <div className="value">
            {users.filter((u) => u.role == "buyer").length}
          </div>
          <div className="name">Buyers</div>
        </div>
        <div className="info-item">
          <div className="icon">
            <i className="fa-solid fa-user-secret"></i>
          </div>
          <div className="value">
            {users.filter((u) => u.role == "admin" || u.role == "owner").length}
          </div>
          <div className="name">Admins</div>
        </div>
      </div>
      <div className="dashboard-splitter">
        <span>LISTING INFO</span>
      </div>
      <div className="dashboard-info">
        <div className="info-item">
          <div className="icon">
            <i className="fa-solid fa-house"></i>
          </div>
          <div className="value">
            {products.filter((p) => p.category == "home").length}
          </div>
          <div className="name">Home</div>
        </div>
        <div className="info-item">
          <div className="icon">
            <i className="fa-solid fa-laptop"></i>
          </div>
          <div className="value">
            {products.filter((p) => p.category == "electronics").length}
          </div>
          <div className="name">Electronics</div>
        </div>
        <div className="info-item">
          <div className="icon">
            <i className="fa-brands fa-playstation"></i>
          </div>
          <div className="value">
            {products.filter((p) => p.category == "gaming").length}
          </div>
          <div className="name">Gaming</div>
        </div>
        <div className="info-item">
          <div className="icon">
            <i className="fa-brands fa-elementor"></i>
          </div>
          <div className="value">
            {products.filter((p) => p.category == "other").length}
          </div>
          <div className="name">Others</div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
