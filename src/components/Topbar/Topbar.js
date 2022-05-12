import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
const Topbar = () => {
  const user = false;
  return (
    <div className="nav-bar">
      <div className="left-nav">
        <i className="top-icon fa-brands fa-facebook-square"></i>
        <i className="top-icon fa-brands fa-twitter-square"></i>
        <i className="top-icon fa-brands fa-linkedin"></i>
        <i className="top-icon fa-brands fa-instagram-square"></i>
      </div>
      <div className="center-nav">
        <ul className="top-list">
          <li className="top-list-item">
            <Link to="/" className="link-style">
              HOME
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/" className="link-style">
              ABOUT
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/" className="link-style">
              CONTACT
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/Write" className="link-style">
              WRITE
            </Link>
          </li>
          <li className="top-list-item">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="right-nav">
        {user ? (
          <img
            className="top-img"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link to="/Login" className="link-style">
                LOGIN
              </Link>
            </li>
            <li className="top-list-item">
              <Link to="/Register" className="link-style">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
