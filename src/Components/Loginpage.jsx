import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api/auth";
import "../index.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await loginUser({ email, password });
    if (data.success) navigate("/home");
  };

  return (
    <div id="container">
      <div id="loginbox">
        <input type="text" placeholder="Enter your email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleLogin} id="btn" type="submit">Login</button>
        <br />
        <h3>Don't have an account?</h3>
        <Link to="/signup">Register Here</Link>
      </div>
    </div>
  );
}
export default Login;