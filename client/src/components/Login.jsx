import React from "react";
import { Link } from "react-router-dom";
import "../assets/Login.css";

export default function Login() {

  return (
    <div id={"login"}>
      <h1 className={"f300"}>Log in to <span className="f800">My</span>Todo</h1>
      <form className="form">
        <input type={"text"} placeholder={"Email Address or Username"}/>
        <input type={"password"} placeholder={"Password"} autoComplete="off"/>
      </form>
      <div className="btn-container">
        <button type={"submit"}>Login</button>
        <Link to={"/SignUp"} className={"link f300"}>Sign Up for <span className="f800 none">My</span>Todo</Link>
      </div>
    </div>
  );
}
