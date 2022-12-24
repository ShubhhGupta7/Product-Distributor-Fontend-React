import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth";

function PrivateRoute() {
  return (
    (isLoggedIn()) ? <Outlet /> : <Navigate to = "/login"/>
  );
}

export default PrivateRoute;
