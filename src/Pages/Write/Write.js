import React from "react";
import "./Write.css";
const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="write-img"
      ></img>
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i class="write-icon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tap to type..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
