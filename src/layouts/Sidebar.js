import { memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import assetsIcon from "../assets/assets icon.svg";
import bookingIcon from "../assets/booking icon.svg";
import calendarIcon from "../assets/calender icon.svg";
import dashboardIcon from "../assets/dashboard icon.svg";
import logoutIcon from "../assets/log out icon.svg";
import messagesIcon from "../assets/messages icon.svg";
import sellcarIcon from "../assets/sell cars icon.svg";
import buycarIcon from "../assets/buy cars icon.svg";
import settingsIcon from "../assets/settings icon.svg";
import servicesIcon from "../assets/services icon.svg";

function Sidebar() {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div className="sidebar-wrapper">
      <div>
        <img
          style={{ height: "31px" }}
          src={logo}
          alt="logo"
          style={{ cursor: "pointer" }}
        />
      </div>{" "}
      <div className="items">
        <div
          className="item"
          onClick={() => {
            navigate("");
          }}
          style={{
            backgroundColor: location.pathname === "/" ? "#F3F5F8" : "",
          }}
        >
          <img src={dashboardIcon} alt="dashboard"></img>
          <p className="item-text">Dashboard</p>
        </div>
        <div className="item">
          <img src={assetsIcon} alt="assets"></img>
          <p className="item-text">Assets</p>
        </div>
        <div
          className="item"
          onClick={() => {
            navigate("booking");
          }}
          style={{
            backgroundColor: location.pathname === "/booking" ? "#F3F5F8" : "",
          }}
        >
          <img src={bookingIcon} alt="booking"></img>
          <p className="item-text">Booking</p>
        </div>
        <div className="item">
          <img src={sellcarIcon} alt="sellcar"></img>
          <p className="item-text">Sell Cars</p>
        </div>
        <div className="item">
          <img src={buycarIcon} alt="buycar"></img>
          <p className="item-text">Buy Cars</p>
        </div>
        <div className="item">
          <img src={servicesIcon} alt="services"></img>
          <p className="item-text">Services</p>
        </div>
        <div className="item">
          <img src={calendarIcon} alt="calendar"></img>
          <p className="item-text">Calendar</p>
        </div>
        <div className="item">
          <img src={messagesIcon} alt="messages"></img>
          <p className="item-text">Messages</p>
        </div>
      </div>
      <div className="bottom-content">
        <div className="item">
          <img src={settingsIcon} alt="settings"></img>
          <p className="item-text">Settings</p>
        </div>

        <div className="item">
          <img src={logoutIcon} alt="logout"></img>
          <p className="item-text">Logout</p>
        </div>
      </div>
    </div>
  );
}
export default memo(Sidebar);
