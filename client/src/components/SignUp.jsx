import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/SignUp.css";
import { signUpData } from "./../utils/dataVerify";

export default function SignUp() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "username": "",
    "password": "",
  });

  const [errors, setErrors] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "username": "",
    "password": "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const errorsCopy = {...errors};

    const erroR = signUpData(name, value, errorsCopy);

    setErrors(erroR);
  };

  const handleSignUp = () => {
    const hasErrors = Object.values(errors).some((val) => val);

    if(!formData.firstName || !formData.lastName || !formData.email || !formData.username || !formData.password || hasErrors) {
      alert("Please Fill out all fields properly!");
      return;
    }

  };


  return (
    <div>
      <form className={"form"}>
        <div id={"fullname"}>
          <input type="text" name={"firstName"} value={formData.firstName} onChange={handleChange} placeholder="First name"/>
          <input type="text" name={"lastName"} value={formData.lastName} onChange={handleChange} placeholder="surname"/>
        </div>
        <input type="text" name={"email"} value={formData.email} onChange={handleChange} placeholder="Email"/>
        <input type="text" name={"username"} value={formData.username} onChange={handleChange} placeholder="Username"/>
        <input type="password" name={"password"} value={formData.password} onChange={handleChange} placeholder="Password" autoComplete="off"/>
      </form>
      <div className="btn-container">
        <button onClick={handleSignUp}>Sign Up</button>
        <Link to={"/"} className={"link f300"}>Already Have an Account?</Link>
      </div>
      {(errors.firstName == "" && errors.lastName == "" && errors.email == "" && errors.username == "" && errors.password == "")? null :
        <div style={{ marginTop: "15px", padding: "15px", borderRadius: "10px", color: "grey", fontSize: "0.8em", minWidth: "350px", background: "white"}}>
          {errors.firstName == "" ? null : <p>{errors.firstName}</p>}
          {errors.lastName == "" ? null : <p>{errors.lastName}</p>}
          {errors.email == "" ? null : <p>{errors.email}</p>}
          {errors.username == "" ? null : <p>{errors.username}</p>}
          {errors.password == "" ? null : <p>{errors.password}</p>}
        </div>
      }
    </div>
  );
}
