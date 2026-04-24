import Register from "./Register";
import { Link,useActionData,useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) =>{
    e.preventDefault();
    console.log("Logging In");
    navigate("/home");
  }
  return (
    <div id="container">
      <div id="loginbox">
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="password" placeholder="Password"/>
        <br />
        <button onClick={handleLogin}id="btn" type="submit">
          Login
        </button>
        <br />
        <h3>Dont have an account?</h3>
        <Link to="/signup">Register Here</Link>
      </div>
    </div>
  );
}
export default Login;
