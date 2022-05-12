import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Settings.css";
const Settings = () => {
  return (
    <div className="settings">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update-title">Update your account</span>
          <span className="setting-delete-title">Delete account</span>
        </div>
        <form className="setting-form">
          <label>Profile Picture</label>
          <div className="setting-pp">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="file-input">
              <i class="setting-pp-icon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Rahil" />
          <label>Email-Id</label>
          <input type="text" placeholder="Rahil@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="setting-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
