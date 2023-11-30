import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../core/contexts/authContext";

export default function AuthGuard(data) {
  const { isAuthenticated } = useContext(AuthContext);
  const shouldBeAuthenticated = data.authenticated;

  if (shouldBeAuthenticated && !isAuthenticated) {
    return <Navigate to="/sign-in" />;
  } else if (!shouldBeAuthenticated && isAuthenticated) {
    return <Navigate to="/404" />;
  }

  return <Outlet />;
}
