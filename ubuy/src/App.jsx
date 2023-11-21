import Header from "./components/shared/header/Header";
import "./App.css";
import { ThemeContext } from "./core/theme-provider/Theme";
import { useContext } from "react";
import SignIn from "./components/user/user-management/SignIn";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/user/user-management/SignUp";
import Footer from "./components/shared/footer/Footer";
import Home from "./components/landing/home/Home";
import Contact from "./components/landing/contact/Contact";
import Profile from "./components/user/profile/Profile";
import Cart from "./components/product/cart/Cart";
import Catalog from "./components/product/catalog/Catalog";
import { Toaster } from "react-hot-toast";
import Create from "./components/product/product-management/Create";
import Edit from "./components/product/product-management/Edit";
import Details from "./components/product/details/Details";
import EditProfile from "./components/user/user-management/EditProfile";
import Error from "./components/landing/error/Error";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container" data-theme={theme}>
      <div>
        <Toaster position="bottom-right" reverseOrder={true} />
      </div>
      <Header />

      <section className="main-window">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/users/:userId" element={<Profile />} />
          <Route path="/users/:userId/edit" element={<EditProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/market" element={<Catalog />} />
          <Route path="/market/:listingId/edit" element={<Edit />} />
          <Route path="/market/:listingId/details" element={<Details />} />
          <Route path="/create" element={<Create />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </section>

      <Footer />
    </div>
  );
}

export default App;
