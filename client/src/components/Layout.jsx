import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../assets/Layout.css";

export default function Layout() {
  return (
    <div id="body">
      <div id={"outlet"}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
