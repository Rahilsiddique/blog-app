import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">bla-bla-bal</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">komedi</li>
          <li className="sidebar-list-item">chungus</li>
          <li className="sidebar-list-item">another one</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-socials">
          <i className="sidebar-icon fa-icon fa-brands fa-facebook-square"></i>
          <i className="sidebar-icon fa-brands fa-twitter-square"></i>
          <i className="sidebar-icon fa-brands fa-linkedin"></i>
          <i className="sidebar-icon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
