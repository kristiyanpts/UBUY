import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../core/contexts/authContext";

export default function AdminGuard() {
  const { isAdmin } = useContext(AuthContext);

  if (!isAdmin) {
    return <Navigate to="/404" />;
  }

  return <Outlet />;
}
