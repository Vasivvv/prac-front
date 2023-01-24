import React from "react";
import "./style.scss";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-container">
            <div className="nav-items">
          <div className="logo">
            <a href="./index.js">OneSchool</a>
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>Programs</li>
              <li>Teachers</li>
            </ul>
          </div>
          <div className="nav-btn">
            <button className="contact-btn">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
