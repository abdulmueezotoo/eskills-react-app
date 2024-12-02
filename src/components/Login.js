import React from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
const [email, setEmail] = React.useState(null);
const [password, setPassword] = React.useState(null);
const navigate = useNavigate();

const handleSubmit = async (event) => {
event.preventDefault();
if (!email || !password) {
alert("Please enter your email and password");
return;
}
try {
const response = await axios.post("http://localhost:3000/auth/login", {
email,
password
});
const token = response.data.token;
localStorage.setItem("authToken",token)
alert("Login successful:", response.data);
navigate("/Mainpage");
} catch (error) {
alert(error.response?.data?.message || "Invalid email or password");
}
};

return(
<div className="loginmain">
    <div className="loginform">
        <h2>SMS</h2>
        <p>Log into your account</p>
        <form>
            <label for="email">Email:</label>
            <input className="email" id="email" type="email" placeholder="Enter your email" onChange={(e)=>
            setEmail(e.target.value)} required/>

            <label for="password">Password:</label>
            <input className="password" id="password" type="password" placeholder="Enter your password" onChange={(e)=>
            setPassword(e.target.value)} required/>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    </div>
    <div className="loginContent">
        <div class="contentcontainer">
            <h1>Start managing now!</h1>
            <p>
                This app is the best you can get in town.
            </p>
            <div class="imagecontainer">
                <img src="SM Images/image4.png" alt="Person working on computers" />
            </div>
        </div>
    </div>

</div>
);
}

export default Login;
