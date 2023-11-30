import { NavLink, Route, Routes } from "react-router-dom";
import "./AdminPanel.css";
import AdminDashboard from "../dashboard/AdminDashboard";
import AdminListings from "../tables/AdminListings";
import AdminUsers from "../tables/AdminUsers";

const AdminPanel = () => {
  return (
    <div className="panel-wrapper">
      <div className="panel-nav">
        <NavLink
          className={({ isActive }) =>
            "panel-nav-option " + (isActive ? "active-panel-nav" : undefined)
          }
          to="/admin/dashboard"
        >
          <div className="name">Dashboard</div>
          <div className="icon">
            <i className="fa-solid fa-table-columns"></i>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "panel-nav-option " + (isActive ? "active-panel-nav" : undefined)
          }
          to="/admin/listings"
        >
          <div className="name">Market Listings</div>
          <div className="icon">
            <i className="fa-solid fa-shop"></i>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "panel-nav-option " + (isActive ? "active-panel-nav" : undefined)
          }
          to="/admin/users"
        >
          <div className="name">Users</div>
          <div className="icon">
            <i className="fa-solid fa-users"></i>
          </div>
        </NavLink>
      </div>

      <div className="panel-window">
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/listings" element={<AdminListings />} />
          <Route path="/users" element={<AdminUsers />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
