import Register from "./Register";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div id="container">
      <div id="loginbox">
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="password" placeholder="Password"/>
        <br />
        <button id="btn" type="submit">
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
