import { useContext, useEffect } from "react";

import * as authService from "../../../core/services/authService";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../core/contexts/authContext";

export default function SignOut() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    authService
      .logout()
      .then(() => {
        logoutHandler();
        navigate("/");
      })
      .catch(() => navigate("/"));
  }, []);

  return null;
}
