import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { isEmailValid } from "../utils/validators";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { useAuth } from "../context/AuthContext";

const Login = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const {user} = useAuth();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        if (!form.password || !form.email) {
            alert("All fields are required !");
            setLoading(false);
            return;
        }

        if (!isEmailValid(form.email)) {
            alert("Invalid Email");
            setLoading(false);
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, form.email, form.password); 
        } catch (error) {
            alert("Invalid credentials");
        }
        setLoading(false);
    }

    if(user){
        return <Navigate to="/dashboard"/>
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Login to your account</h2>
                <p className="text-center text-sm mb-6 text-gray-600">Enter your credentials to access the dashboard</p>
                <form onSubmit={handleSubmit}>
                    <Input type="email" name="email" placeholder="user@example.com" value={form.email} onChange={handleChange} />
                    <Input type="password" name="password" placeholder="*******" value={form.password} onChange={handleChange} />
                    <Button text="Login" loading={loading}/>
                </form>
                <p className="text-center text-sm mt-4 text-gray-600">Don't have an account ?
                    <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => navigate("/signup")}> Sign Up</span>
                </p>
            </div>
        </div>
    )
}

export default Login;