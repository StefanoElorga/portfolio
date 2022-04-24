import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Stefano
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+54 1166478267</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>stefanoelorga22@gmail.com</span>
          </div>
          {/* <a href="#portfolio">asdasdas</a>
          <a href="#projects">asdasdas</a>
          <a href="#contact">asdasdas</a> */}
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
