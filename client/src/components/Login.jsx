import React,{ useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Login.css";

export default function Login() {
  const [loginData, setLoginData] = useState({
    user: "",
    pass: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    console.log(JSON.stringify(loginData));
    
    const response = await fetch("http://localhost:5000/myTodo/user/signUp", {
      method: "GET"
    });

    const data = await response.json();
   console.log("Response = " + JSON.stringify(data));
  };

  return (
    <div id={"login"}>
      <h1 className={"f300"}>Log in to <span className="f800">My</span>Todo</h1>
      <form className="form">
        <input type={"text"} name={"user"} value={loginData.user} onChange={handleChange} placeholder={"Email Address or Username"}/>
        <input type={"password"} name={"pass"} value={loginData.pass} onChange={handleChange} placeholder={"Password"} autoComplete="off"/>
      </form>
      <div className="btn-container">
        <button type={"submit"} onClick={handleSubmit}>Login</button>
        <Link to={"/SignUp"} className={"link f300"}>Sign Up for <span className="f800 none">My</span>Todo</Link>
      </div>
    </div>
  );
}
