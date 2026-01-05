import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {

    const navigate = useNavigate();
    const {user} = useAuth();

    return(
        <aside className="w-64 shadow-md p-5 bg-linear-to-b from-blue-500 via-blue-600 to-blue-700 text-white">
            <h2 className="text-xl font-bold mb-6">Analytics</h2>
            <ul className="space-y-3">
                <li className="hover:cursor-pointer hover:text-gray-300" onClick={() => navigate("/dashboard")}>Dashboard</li>
                {user?.role === "admin" && (<li className="hover:cursor-pointer hover:text-gray-300" onClick={() => navigate("/admin")}>Admin Panel</li>)}
                <li className="hover:cursor-pointer hover:text-gray-300" onClick={() => navigate("/reports")}>Reports</li>
                {/* <li className="hover:cursor-pointer hover:text-gray-300" onClick={() => navigate("/settings")}>Settings</li> */}
            </ul>
        </aside>
    )
}

export default Sidebar;