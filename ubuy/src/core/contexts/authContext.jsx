import usePersistedState from "../hooks/userPersistedState";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/authService";
import toast from "react-hot-toast";
import { EMAIL_REGEX_VALIDATOR } from "../constants/api.constants";
import {
  SendErrorNotification,
  SendSuccessNotification,
} from "../notifications/notifications";

// @ts-ignore
const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values) => {
    // Validating values
    if (!EMAIL_REGEX_VALIDATOR.test(values.email)) {
      return SendErrorNotification(`Invalid email format!`);
    }

    if (values.password.length < 5) {
      return SendErrorNotification(
        `Password must be at least 5 characters long!`
      );
    }

    // Back-End request
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    SendSuccessNotification(`Welcome back, ${result.username}!`);

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

    SendSuccessNotification(
      `Successful registration! Welcome, ${result.firstName} ${result.lastName}!`
    );

    localStorage.setItem("id", result._id);

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

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
