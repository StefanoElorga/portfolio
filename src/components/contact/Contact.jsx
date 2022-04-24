import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>contacto</h2>
        <div className="container">
          <a href="https://www.linkedin.com/in/stefanoelorga/">
            <img src="assets/linkedin.png" alt="" />
            linkedin/stefanoelorga
          </a>{" "}
        </div>
        <div className="container">
          <img src="assets/mobile.png" alt="" />
          <h5>+54 1166478267</h5>{" "}
        </div>
        <div className="container">
          <img src="assets/gmail.png" alt="" />
          <h5>stefanoelorga22@gmail.com </h5>
        </div>
        <a href="https://github.com/StefanoElorga">
          <img src="assets/github.png" alt="" />
          /StefanoElorga
        </a>
      </div>
    </div>
  );
}
