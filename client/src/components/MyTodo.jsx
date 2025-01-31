import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/MyTodo.css";

export default function MyTodo() {
  //StateVariables

  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("username");
  const [myTodos, setMyTodos] = useState([]);
  const [myTodoValue, setMyTodoValue] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  //useEffects

  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? null:navigate("/");
    async function fetchData() {
      const response = await axios.post("http://localhost:5000/myTodo/user/entry", 
        {},
        {
          headers: {
            auth: token
          }
        });

      const { user, myTodo } = response.data;
      setUsername(user);
      setMyTodos(myTodo);
    }
    fetchData();
  },[])


  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      const response = await axios.put("http://localhost:5000/myTodo/user/updateTodos", {
        myTodos
      }, {
        headers: {
            auth: token
          }
      });
    }
    if(!initialLoad) {
      fetchData();
    }else {
      setInitialLoad(false);
    }
  },[myTodos]);

  //HANDLERS

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  function handleMouseOver() {
    setIsActive(true);
  };
  
  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const addTodo = () => {
    const myTodo = myTodoValue;
    if(myTodo != "") {
      setMyTodos((prev) => ([ ...prev, myTodo ]));
      setMyTodoValue("");
    }
  };

  const myTodoOnChange = (e) => {
    setMyTodoValue(e.target.value);
  };

  const deleteTodo = (index) => {
    setMyTodos((prev) => prev.filter((todo, i) => i !== index));
  }


  //Main
  return (
    <div id={"main-page"}>
      <div id={"user-section"} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <img src="/profile.jpg" alt={"Profile pic here"} title={"Profile Pic"} height="45px" width="45px"/>
        <div id={ isActive?"usernameHover":"username"}>
          <span>{username}</span>
          <button onClick={handleLogOut}>Log out</button>
        </div>
      </div>
      <div id={"myTodo-section"}>
        <h1 id={"headline"} className={"f300"}><span className={"f800"}>My</span>Todos</h1>
        <div id={"btn-section"}>
          <button onClick={() => {setMyTodos([])}}>Clear All</button>
        </div>
        <div id={"addTodo-section"}>
          <input type={"text"} value={myTodoValue} onChange={myTodoOnChange} placeholder={"What are you doing today?"}/>
          <button onClick={addTodo}>+</button>
        </div>
        <div id={"todoList-section"}>
          {myTodos.map((todo, index) => (<div key={index}>
            <input id={index} name={index} type={"checkbox"}/>
            <label htmlFor={index}>{todo}</label>
            <button onClick={() => {deleteTodo(index);}}>x</button>
          </div>))}
        </div>
      </div>
    </div>
  );
}



          /*<div>
            <input id={"1"} name="1" type={"checkbox"}/>
            <label htmlFor={"1"}>This is first Todo.</label>
            <button>x</button>
          </div>
          <div>
            <input id="2" name="2" type="checkbox"/>
            <label htmlFor="2">This is second Todo.</label>
            <button>x</button>
          </div>*/
