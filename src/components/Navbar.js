import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  

  // const toggleMode = () => {
  //   if (mode === `info`) {
  //     setMode(`dark`);
  //     document.body.style.backgroundColor = "#242939";
  //     document.body.style.color = "white";
  //   } else {
  //     setMode(`info`);
  //     document.body.style.backgroundColor = "white";

  //     document.body.style.color = "black";
  //   }
  // };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          DailyNews
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
        <div
          id="id"
          className={`form-check form-switch text-${
            props.mode === `light` ? `dark` : `light`
          }`}
        >
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable {props.mode==='light'?'Dark':'Light'} Mode
          </label>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
