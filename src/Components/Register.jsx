import { Link } from "react-router-dom";
function Register() {
  return (
    <div id="container">
      <div id="loginbox">
        <input type="text" placeholder="Enter your name here" />
        <br />
        <input type="text" placeholder="Enter your password" />
        <br />
        <input type="text" placeholder="Re-Enter the same Password" />
        <br />
        <button id="btn" type="submit">Create Account</button>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
export default Register