import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/auth/signin" replace />;
    }else{
    return children
    }
  };

export default ProtectedRoute