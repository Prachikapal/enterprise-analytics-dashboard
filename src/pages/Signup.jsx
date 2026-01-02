import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import { auth, db } from "../services/firebase";
import {isEmailValid} from "../utils/validators";

const Signup = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name:"",
        email:"", 
        password:"",
        confirmPassword:""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!isEmailValid(form.email)){  
            alert("Invalid Email");
            return;
        }
        if(form.password != form.confirmPassword){
            alert("Passwords do not match!");
            return;
        }
        try{
           const userCredentials = await createUserWithEmailAndPassword(auth,form.email,form.password);
           console.log("userCredentials",userCredentials.user.uid);
           await setDoc(doc(db, "users", userCredentials.user.uid),{email:form.email, role:"user", createdDate: new Date()})
           navigate("/");
        }catch(error){
            console.log(error);
            alert("Signup failed");
        }
    }

     return(
        <div>
            <h2>Sign up for an account</h2>
            <p>Enter your details to create an account.</p>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange}/>
                <input type="email" name="email" placeholder="user@example.com" value={form.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="*******" value={form.password} onChange={handleChange}/>
                <input type="password" name="confirmPassword" placeholder="*******" value={form.confirmPassword} onChange={handleChange}/>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account ?</p>
            <span onClick={() => navigate("/")}>Login</span>
        </div>
    )
}

export default Signup;