import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({children, allowedRoles}) => {

    const {loading, user} = useAuth();

    if(loading) return <p>Loading....</p>;
    if(!user) return <Navigate to="/"/>;

    if(allowedRoles && !allowedRoles.includes(user.role)){
        <Navigate to="/unauthorized"/>;
    }

    return children;
}

export default ProtectedRoute;