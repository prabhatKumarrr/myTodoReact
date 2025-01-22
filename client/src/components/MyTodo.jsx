import React, { useState, useEffect } from "react";
import "../assets/MyTodo.css";

export default function MyTodo() {
  
  const [isActive, setIsActive] = useState(false);


  function handleMouseOver() {
    setIsActive(true);
  };
  
  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div id={"main-page"}>
      <div id={"user-section"} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <img src="/profile.jpg" alt={"Profile pic here"} title={"Profile Pic"} height="45px" width="45px"/>
        <div id={ isActive?"usernameHover":"username"}>
          <span>pappuHalwai69</span>
          <button>Log out</button>
        </div>
      </div>
      <div id={"myTodo-section"}>
        <h1 id={"headline"} className={"f300"}><span className={"f800"}>My</span>Todos <span>done</span></h1>
        <div id={"btn-section"}>
          <button>Clear All</button>
          <button>Clear Completed</button>
        </div>
        <div id={"addTodo-section"}>
          <input type={"text"} placeholder={"What are you doing today?"}/>
          <button>+</button>
        </div>
        <div id={"todoList-section"}>
          <div>
            <input id={"1"} name="1" type={"checkbox"}/>
            <label htmlFor={"1"}>This is first Todo.</label>
            <button>x</button>
          </div>
          <div>
            <input id="2" name="2" type="checkbox"/>
            <label htmlFor="2">This is second Todo.</label>
            <button>x</button>
          </div>
        </div>
      </div>
    </div>
  );
}
