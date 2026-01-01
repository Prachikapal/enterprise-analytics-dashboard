import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { isEmailValid } from "../utils/validators";

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email:"", 
        password:""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!form.password || !form.email){
            alert("All fields are required !");
            return;
        }

        if(!isEmailValid(form.email)){  
            alert("Invalid Email");
            return;
        }

        try{
            await signInWithEmailAndPassword(auth,form.email,form.password);
            navigate("/dashboard");
        }catch (error){
            alert("Invalid credentials");
        }
    }

    return(
        <div>
            <h2>Login to your account</h2>
            <p>Enter your credentials to access the dashboard</p>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="user@example.com" value={form.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="*******" value={form.password} onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account ?</p>
            <span onClick={() => navigate("/signup")}>Sign Up</span>
        </div>
    )
}

export default Login;