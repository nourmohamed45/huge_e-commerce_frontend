import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ auth, children }) => {
  if (auth === false) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  auth: PropTypes.bool,
  children: PropTypes.node,
};

export default ProtectedRoute;
