import Header from "./components/shared/header/Header";
import "./App.css";
import { ThemeContext } from "./core/theme-provider/Theme";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignIn from "./components/user/user-management/SignIn";
import SignUp from "./components/user/user-management/SignUp";
import Footer from "./components/shared/footer/Footer";
import Home from "./components/landing/home/Home";
import Contact from "./components/landing/contact/Contact";
import Profile from "./components/user/profile/Profile";
import Cart from "./components/product/cart/Cart";
import Catalog from "./components/product/catalog/Catalog";
import Create from "./components/product/product-management/Create";
import Edit from "./components/product/product-management/Edit";
import Details from "./components/product/details/Details";
import EditProfile from "./components/user/user-management/EditProfile";
import Error from "./components/landing/error/Error";
import SignOut from "./components/user/user-management/SignOut";
import AdminPanel from "./components/admin-panel/panel/AdminPanel";

import AuthGuard from "./components//guards/AuthGuard";
import AdminGuard from "./components/guards/AdminGuard";
import RoleGuard from "./components/guards/RoleGuard";

import { AuthProvider } from "./core/contexts/authContext";

import * as authService from "./core/services/authService";
import { SendErrorNotification } from "./core/notifications/notifications";
import { Backdrop, CircularProgress } from "@mui/material";

function App() {
  const { theme } = useContext(ThemeContext);
  const [backendLoading, setBackendLoading] = useState(true);

  useEffect(() => {
    authService
      .loadBackend()
      .then(() => {
        setBackendLoading(false);
      })
      .catch(() => {
        setBackendLoading(false);
        SendErrorNotification(
          "Back-End encountered error. Refreshing page in 5 seconds."
        );

        setTimeout(() => {
          location.reload();
        }, 5000);
      });
  }, []);

  return (
    <AuthProvider>
      <div className="container" data-theme={theme}>
        <Toaster position="bottom-right" reverseOrder={true} />
        <Header />

        <section className="main-window">
          <Routes>
            {/* Landing Pages Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            {/* Product Routes */}
            <Route path="/market" element={<Catalog />} />
            <Route path="/market/:productId/details" element={<Details />} />

            {/* User Management Routes */}
            <Route path="/users/:profileId" element={<Profile />} />

            {/* Non-Authentication Protected Routes */}
            <Route element={<AuthGuard authenticated={false} />}>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>

            {/* Authentication Protected Routes */}
            <Route element={<AuthGuard authenticated={true} />}>
              <Route element={<RoleGuard />}>
                <Route path="/create" element={<Create />} />
              </Route>

              <Route path="/market/:productId/edit" element={<Edit />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/sign-out" element={<SignOut />} />
              <Route path="/users/:profileId/edit" element={<EditProfile />} />
            </Route>

            {/* Admin Panel Route */}
            <Route element={<AdminGuard />}>
              <Route path="/admin/*" element={<AdminPanel />} />
            </Route>

            {/* 404 Error */}
            <Route path="*" element={<Error />} />
          </Routes>
        </section>

        <Footer />

        <Backdrop
          sx={{
            color: "var(--text-primary)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "var(--background-primary)",
          }}
          open={backendLoading}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative", textAlign: "center" }}>
              <CircularProgress color="inherit" />
            </div>
            <h3 style={{ position: "relative", textAlign: "center" }}>
              Back-End Loading
            </h3>
            <h3 style={{ position: "relative", textAlign: "center" }}>
              Please Wait
            </h3>
          </div>
        </Backdrop>
      </div>
    </AuthProvider>
  );
}

export default App;
