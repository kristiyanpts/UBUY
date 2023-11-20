import Header from "./components/shared/header/Header";
import "./App.css";
import { ThemeContext } from "./core/theme-provider/Theme";
import { useContext } from "react";
import SignIn from "./components/user/signIn/SignIn";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/user/signUp/SignUp";
import Footer from "./components/shared/footer/Footer";
import Home from "./components/landing/home/Home";
import Contact from "./components/landing/contact/Contact";
import Profile from "./components/user/profile/Profile";
import Cart from "./components/product/cart/Cart";
import Catalog from "./components/product/catalog/Catalog";
import { Toaster } from "react-hot-toast";

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
          <Route path="/users" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/market" element={<Catalog />} />
        </Routes>
      </section>

      <Footer />
    </div>
  );
}

export default App;
