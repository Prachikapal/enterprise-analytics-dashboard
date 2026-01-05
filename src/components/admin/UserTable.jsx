import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";

const UserTable = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const docSnap = await getDocs(collection(db, "users"));
                const usersData = docSnap.docs.map((doc) => ({
                    id: doc.id,
                    email: doc.data().email,
                    role: doc.data().role
                }));
                setUsers(usersData);
            } catch (error) {
                console.error("Error occurred while fetching the users", error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Manage Users</h3>
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-500 bg-gray-100">
                        <th className="p-2">Email</th>
                        <th className="p-2">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (
                        <tr key={user.id} className="border-t">
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;