import { memo } from "react";
import "./pages.css";
import downwardIcon from "../assets/downward.svg";
import filterIcon from "../assets/filter.svg";
import cardIcon from "../assets/card.svg";
import cars from "../utils/cars.js";
import loveIcon from "../assets/love.svg";
import lovefilledIcon from "../assets/love filled.svg";
import cayman from "../assets/cayman.jpg";
import seatsIcon from "../assets/seats.svg";
import manualIcon from "../assets/manual.svg";

function Booking() {
  return (
    <div className="booking-wrapper">
      <div className="booking-text">Booking</div>
      <div className="filters">
        <div className="dropdowns">
          <div className="dropdown">
            New
            <img src={downwardIcon} alt="downward"></img>
          </div>
          <div className="dropdown">
            Toyota
            <img src={downwardIcon} alt="downward"></img>
          </div>{" "}
        </div>
        <div className="settings">
          <img
            style={{
              width: "60px",
              height: "60px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            src={cardIcon}
            alt="card"
          ></img>
          <img
            style={{ cursor: "pointer" }}
            src={filterIcon}
            alt="filter"
          ></img>
        </div>
      </div>
      <div className="car-cards-wrapper">
        {cars.map((car, idx) => (
          <div className="car-card" key={car.title + idx}>
            <div className="car-header">
              <div className="car-title">{car.title}</div>
              <img
                src={car.liked ? lovefilledIcon : loveIcon}
                className="heart"
              ></img>
            </div>
            <div className="car-subtitle">{car.subtitle}</div>
            <img
              style={{ width: "400px", height: "200px" }}
              src={cayman}
              alt="cayman"
            ></img>
            <div className="car-details">
              <div className="car-detail">
                <img src={seatsIcon} alt="seats"></img>
                <div className="car-detail-text">{car.seats}</div>
              </div>
              <div className="car-detail">
                <img src={manualIcon} alt="manual"></img>
                <div className="car-detail-text">{car.gear}</div>
              </div>
              <div className="price">
                <div className="price-value">{"$" + car.price}</div>
                <div className="price-text">/d</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(Booking);
