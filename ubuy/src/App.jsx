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

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container" data-theme={theme}>
      <Header />

      <section className="main-window">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </section>

      <Footer />
    </div>
  );
}

export default App;
