import Header from "./components/shared/header/Header";
import "./App.css";
import { ThemeContext } from "./core/theme-provider/Theme";
import { useContext } from "react";
import ThemeButton from "./components/shared/themeButton/ThemeButton";
import SignIn from "./components/user/signIn/SignIn";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/user/signUp/SignUp";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container" data-theme={theme}>
      <ThemeButton />
      <Header />

      <section className="main-window">
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
