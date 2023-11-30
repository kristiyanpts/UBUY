import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../core/contexts/authContext";

export default function RoleGuard() {
  const { isSeller } = useContext(AuthContext);

  console.log(isSeller);

  if (!isSeller) {
    return <Navigate to="/404" />;
  }

  return <Outlet />;
}
