import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MyTodo from "./components/MyTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout/>}> 
          <Route index element={<Login/>}/>
          <Route path={"/SignUp"} element={<SignUp/>}/>
          <Route path={"/MyTodo"} element={<MyTodo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
