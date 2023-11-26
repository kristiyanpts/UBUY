import Header from "./components/shared/header/Header";
import "./App.css";
import { ThemeContext } from "./core/theme-provider/Theme";
import { useContext } from "react";
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

import { AuthProvider } from "./core/contexts/authContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <AuthProvider>
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
            <Route path="/market/:productId/edit" element={<Edit />} />
            <Route path="/market/:productId/details" element={<Details />} />
            <Route path="/create" element={<Create />} />
            <Route path="/cart" element={<Cart />} />

            {/* User Management Navs */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-out" element={<SignOut />} />
            <Route path="/users/:profileId" element={<Profile />} />
            <Route path="/users/:profileId/edit" element={<EditProfile />} />

            {/* 404 Error */}
            <Route path="*" element={<Error />} />
          </Routes>
        </section>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
