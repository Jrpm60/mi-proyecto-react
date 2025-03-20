import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteadmin = ({ element }) => {
  const isAdmin = true;  // Change this to your actual auth state

  return isAdmin ? element : <Navigate to="/" replace />;
};

export default ProtectedRouteadmin;