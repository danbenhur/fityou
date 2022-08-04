import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();

  if (!auth.user) {
    return <Navigate replace to="/auth/login" />;
  }

  return children;
};

export default RequireAuth;
