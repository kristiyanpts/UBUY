import Header from "./components/shared/header/Header";
import "./App.css";
import { ThemeContext } from "./core/theme-provider/Theme";
import { useContext, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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

import * as authService from "./core/services/authService";
import AuthContext from "./core/contexts/authContext";

function App() {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");

    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    setAuth(result);
    console.log(result);
    toast.success(`Welcome back, ${result.username}!`, {
      style: {
        border: "2px solid var(--text-primary)",
        color: "var(--text-primary)",
        backgroundColor: "var(--background-primary)",
        fontSize: "18px",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px 0px var(--text-primary)",
      },
      duration: 4000,
      iconTheme: {
        primary: "yellowgreen",
        secondary: "var(--text-primary)",
      },
    });
    console.log(result);
    localStorage.setItem("id", result._id);
    navigate("/");
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(
      values.firstName,
      values.lastName,
      values.email,
      values.username,
      values.password,
      values.repeatPassword,
      values.pfpUrl,
      values.role
    );
    setAuth(result);
    localStorage.setItem("id", result._id);
    toast.success(
      `Successful registration! Welcome, ${result.firstName} ${result.lastName}!`,
      {
        style: {
          border: "2px solid var(--text-primary)",
          color: "var(--text-primary)",
          backgroundColor: "var(--background-primary)",
          fontSize: "18px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px var(--text-primary)",
        },
        duration: 4000,
        iconTheme: {
          primary: "yellowgreen",
          secondary: "var(--text-primary)",
        },
      }
    );
    navigate("/");
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("id");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    firstName: auth.firstName,
    lastName: auth.lastName,
    email: auth.email,
    username: auth.username,
    password: auth.password,
    repeatPassword: auth.repeatPassword,
    pfpUrl: auth.pfpUrl,
    role: auth.role,
    id: auth._id,
    isAuthenticated: !!auth._id,
  };

  return (
    <AuthContext.Provider value={values}>
      <div className="container" data-theme={theme}>
        <div>
          <Toaster position="bottom-right" reverseOrder={true} />
        </div>
        <Header />

        <section className="main-window">
          <Routes>
            {/* Landing Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            {/* Product Navs */}
            <Route path="/market" element={<Catalog />} />
            <Route path="/market/:listingId/edit" element={<Edit />} />
            <Route path="/market/:listingId/details" element={<Details />} />
            <Route path="/create" element={<Create />} />
            <Route path="/cart" element={<Cart />} />

            {/* User Management Navs */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-out" element={<SignOut />} />
            <Route path="/users/:userId" element={<Profile />} />
            <Route path="/users/:userId/edit" element={<EditProfile />} />

            {/* 404 Error */}
            <Route path="*" element={<Error />} />
          </Routes>
        </section>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
