import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import { isEmailValid } from "../utils/validators";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Signup = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        if (!isEmailValid(form.email)) {
            alert("Invalid Email");
            setLoading(false);
            return;
        }
        if (form.password != form.confirmPassword) {
            alert("Passwords do not match!");
            setLoading(false);
            return;
        }
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, form.email, form.password);
            await setDoc(doc(db, "users", userCredentials.user.uid), { email: form.email, role: "user", createdDate: new Date() })
            navigate("/");
        } catch (error) {
            alert("Signup failed");
        }
        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Sign up for an account</h2>
                <p className="text-center text-sm mb-6 text-gray-600">Enter your details to create an account.</p>
                <form onSubmit={handleSubmit}>
                    <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
                    <Input type="email" name="email" placeholder="user@example.com" value={form.email} onChange={handleChange} />
                    <Input type="password" name="password" placeholder="*******" value={form.password} onChange={handleChange} />
                    <Input type="password" name="confirmPassword" placeholder="*******" value={form.confirmPassword} onChange={handleChange} />
                    <Button text="Sign Up" loading={loading}/>
                </form>
                <p className="text-center text-sm mt-4 text-gray-600">Already have an account ?
                    <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => navigate("/")}>Login</span>
                </p>
            </div>
        </div>
    )
}

export default Signup;