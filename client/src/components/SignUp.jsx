import React from "react";
import { Link } from "react-router-dom";
import "../assets/SignUp.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "username": "",
    "password": "",
  });
  

  const handleChange = () => {

  };

  const handleSignUp = () => {
    
  };


  return (
    <div>
      <form className={"form"}>
        <div id={"fullname"}>
          <input type="text" placeholder="First name"/>
          <input type="text" placeholder="surname"/>
        </div>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password" autoComplete="off"/>
      </form>
      <div className="btn-container">
        <button onClick={handleSignUp}>Sign Up</button>
        <Link to={"/"} className={"link f300"}>Already Have an Account?</Link>
      </div>
    </div>
  );
}
