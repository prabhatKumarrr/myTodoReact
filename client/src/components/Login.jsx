import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);
  const [message, setMessage] = useState("");
  const [loginData, setLoginData] = useState({
    user: "",
    pass: ""
  });

  useEffect(() => {
    localStorage.getItem("token") ? navigate("/MyTodo"):null;
  },[]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:5000/myTodo/user/login", loginData);

    if(response.data.status) {
      localStorage.setItem("token", response.data.token);
      navigate("/MyTodo");
    }
    else {
      setIsDone(true);
      setMessage(response.data.msg);
      console.log(response.data.msg);
    }
  };

  const handleMessage = () => {
    setIsDone(false);
    setMessage("");
  };

  return (
    <div id={"login"}>
      {isDone ? <div style={{
        position: "absolute",
        top: "35vh",
        left: "30vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        background: "linear-gradient(135deg, rgb(30, 187, 202), rgb(235, 188, 167))",
        height: "20vh",
        width: "40vw",
        padding: "4vh 15px 0vh",
        color: "white",
        textAlign: "center",
        borderRadius: "12px",
      }}>
        <p>{message}</p>
        <button onClick={handleMessage}>OK</button>
      </div> : null}
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
