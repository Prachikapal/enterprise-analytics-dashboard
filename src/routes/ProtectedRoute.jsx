import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";

const ProtectedRoute = ({children}) => {
    return auth.currentUser ? children : <Navigate to="/"/>;
}

export default ProtectedRoute;