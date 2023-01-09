import { memo } from "react";
import "./layouts.css";
import searchIcon from "../assets/search icon.svg";
import notifIcon from "../assets/notification.svg";
import portait from "../assets/portrait.png";

function header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="searchbar">
          <img src={searchIcon} alt="search icon" />
          <div className="rectangle"></div>
          <input
            type="text"
            className="search-box"
            placeholder="Search or type"
          />
        </div>
        <div className="notif-profile">
          <img
            src={notifIcon}
            alt="notification icon"
            style={{ cursor: "pointer" }}
          ></img>
          <img
            src={portait}
            alt="portrait"
            className="portrait"
            style={{ cursor: "pointer" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
export default memo(header);
