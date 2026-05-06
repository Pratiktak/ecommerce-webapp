import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../api/auth";
import "../index.css";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
  try {
    const res = await registerUser({ fullName, email, password });
    console.log("Success:", res);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

  return (
    <div id="container">
      <div id="loginbox">
        <input type="text" placeholder="Enter your name"
          value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <br />
        <input type="text" placeholder="Enter your email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Enter your password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button id="btn" type="submit" onClick={handleRegister}>Create Account</button>
        <br />
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
export default Register;