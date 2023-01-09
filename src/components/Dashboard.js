import { memo, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import energyIcon from "../assets/energy icon.svg";
import rangeIcon from "../assets/range icon.svg";
import fluidIcon from "../assets/fluid icon.svg";
import wearIcon from "../assets/wear icon.svg";
import recommendations from "../utils/recommendations.js";
import cayman from "../assets/cayman.jpg";
import recommendIcon from "../assets/recommend icon.svg";
import manualgreyIcon from "../assets/manual grey icon.svg";
import cogIcon from "../assets/cog icon.svg";
import electricIcon from "../assets/electric icon.svg";
import Chart from "./Chart";
import Histogram from "./Histogram";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Dashboard() {
  const [hoveringEnergy, setHoveringEnergy] = useState(false);
  const [hoveringRange, setHoveringRange] = useState(false);
  const [hoveringFluid, setHoveringFluid] = useState(false);
  const [hoveringWear, setHoveringWear] = useState(false);
  const [unit, setUnit] = useState("day");
  const [unit2, setUnit2] = useState("day");

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-row-container">
        <div
          className="dashboard-card"
          onMouseEnter={() => {
            setHoveringEnergy(true);
          }}
          onMouseLeave={() => {
            setHoveringEnergy(false);
          }}
          style={{ backgroundColor: hoveringEnergy ? "#A162F7" : "#fff" }}
        >
          <img src={energyIcon} alt="energy" />
          <div
            className="dashboard-card-text"
            style={{ color: hoveringEnergy ? "white" : "black" }}
          >
            Energy
          </div>
          <CircularProgressbar
            value={45}
            text={`${45}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "round",
              textColor: hoveringEnergy ? "#FFF" : "#000",
              trailColor: hoveringEnergy ? "#B37EFC" : "#F4F5F9",
              pathColor: hoveringEnergy ? "#FFF" : "#A162F7",
            })}
          />
        </div>
        <div
          className="dashboard-card"
          onMouseEnter={() => {
            setHoveringRange(true);
          }}
          onMouseLeave={() => {
            setHoveringRange(false);
          }}
          style={{ backgroundColor: hoveringRange ? "#FF7E86" : "#fff" }}
        >
          <img
            src={rangeIcon}
            alt="range"
            style={{ backgroundColor: "white", borderRadius: "50%" }}
          />
          <div
            className="dashboard-card-text"
            style={{ color: hoveringRange ? "white" : "black" }}
          >
            Range
          </div>
          <CircularProgressbar
            value={60}
            text={`${"157k"}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "round",
              textColor: "#000",
              textColor: hoveringRange ? "#FFF" : "#000",
              trailColor: hoveringRange ? "#ED6281" : "#F4F5F9",
              pathColor: hoveringRange ? "#FFF" : "#FF7E86",
            })}
          />
        </div>
        <div
          className="dashboard-card"
          onMouseEnter={() => {
            setHoveringFluid(true);
          }}
          onMouseLeave={() => {
            setHoveringFluid(false);
          }}
          style={{ backgroundColor: hoveringFluid ? "#A162F7" : "#fff" }}
        >
          <img
            src={fluidIcon}
            alt="fluid"
            style={{ backgroundColor: "white", borderRadius: "50%" }}
          />
          <div
            className="dashboard-card-text"
            style={{ color: hoveringFluid ? "white" : "black" }}
          >
            Break fluid
          </div>
          <CircularProgressbar
            value={9}
            text={`${9}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "round",
              textColor: hoveringFluid ? "#FFF" : "#000",
              trailColor: hoveringFluid ? "#B37EFC" : "#F4F5F9",
              pathColor: hoveringFluid ? "#FFF" : "#A162F7",
            })}
          />
        </div>
        <div
          className="dashboard-card"
          onMouseEnter={() => {
            setHoveringWear(true);
          }}
          onMouseLeave={() => {
            setHoveringWear(false);
          }}
          style={{ backgroundColor: hoveringWear ? "#F6CC0D" : "#fff" }}
        >
          <img
            src={wearIcon}
            alt="wear"
            style={{ backgroundColor: "white", borderRadius: "50%" }}
          />
          <div
            className="dashboard-card-text"
            style={{ color: hoveringWear ? "white" : "black" }}
          >
            Tire Wear
          </div>
          <CircularProgressbar
            value={25}
            text={`${25}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "round",
              textColor: hoveringWear ? "#FFF" : "#000",
              trailColor: hoveringWear ? "#E4B008" : "#F4F5F9",
              pathColor: hoveringWear ? "#FFF" : "#F6CC0D",
            })}
          />
        </div>
      </div>
      <div className="dashboard-row-container">
        <div
          className="dashboard-card"
          style={{
            width: "50%",
            height: "400px",
            alignItems: "normal",
            cursor: "default",
          }}
        >
          <div className="chart-histogram-header">
            <p className="car-miles-text ">Miles</p>
            <p className="statistics-text">Statistics</p>
          </div>

          <div className="date-row">
            <div className="button-group" style={{ marginLeft: "0px" }}>
              <button
                className="unit-button"
                style={
                  unit2 === "day"
                    ? { backgroundColor: "#2884FF", color: "#FFF" }
                    : undefined
                }
                onClick={() => setUnit2("day")}
              >
                Day
              </button>
              <button
                className="unit-button"
                style={
                  unit2 === "week"
                    ? { backgroundColor: "#2884FF", color: "#FFF" }
                    : undefined
                }
                onClick={() => setUnit2("week")}
              >
                Week
              </button>
              <button
                className="unit-button"
                style={
                  unit2 === "month"
                    ? { backgroundColor: "#2884FF", color: "#FFF" }
                    : undefined
                }
                onClick={() => setUnit2("month")}
              >
                {" "}
                Month
              </button>
            </div>
            <p className="date-miles-text" style={{ marginLeft: "auto" }}>
              {unit2 === "day"
                ? "256 Miles"
                : unit2 === "week"
                ? "1500 Miles"
                : "10000 Miles"}
            </p>
          </div>
          {unit2 === "day" && <Histogram unit="day"></Histogram>}
          {unit2 === "week" && <Histogram unit="week"></Histogram>}
          {unit2 === "month" && <Histogram unit="month"></Histogram>}
          <div className="timeline">
            {new Array(8)
              .map((item, idx) => new Date().getDate() - idx)
              .join("    ")}
          </div>
        </div>
        <div
          className="dashboard-card"
          style={{
            width: "50%",
            height: "400px",
            alignItems: "normal",
            cursor: "default",
          }}
        >
          <div className="chart-histogram-header">
            <p className="car-miles-text ">Car</p>
            <p className="statistics-text">Statistics</p>
          </div>
          <div className="date-row">
            <p className="date-miles-text">
              {new Date().getDate() +
                " " +
                months[new Date().getMonth()] +
                " " +
                new Date().getFullYear()}
            </p>
            <div className="button-group">
              <button
                className="unit-button"
                style={
                  unit === "day"
                    ? { backgroundColor: "#FF764C", color: "#FFF" }
                    : undefined
                }
                onClick={() => setUnit("day")}
              >
                Day
              </button>
              <button
                className="unit-button"
                style={
                  unit === "week"
                    ? { backgroundColor: "#FF764C", color: "#FFF" }
                    : undefined
                }
                onClick={() => setUnit("week")}
              >
                Week
              </button>
              <button
                className="unit-button"
                style={
                  unit === "month"
                    ? { backgroundColor: "#FF764C", color: "#FFF" }
                    : undefined
                }
                onClick={() => setUnit("month")}
              >
                {" "}
                Month
              </button>
            </div>
          </div>
          {unit === "day" && <Chart unit="day"></Chart>}
          {unit === "week" && <Chart unit="week"></Chart>}
          {unit === "month" && <Chart unit="month"></Chart>}
          <div className="timeline">
            {new Array(8)
              .map((item, idx) => new Date().getDate() - idx)
              .join("    ")}
          </div>
        </div>
      </div>
      <div className="dashboard-row-container">
        {recommendations.map((recommendation, idx) => (
          <div
            key={recommendation.title + idx}
            className="dashboard-car-card"
            style={{
              backgroundColor:
                idx === 0 ? "#E1DFA4" : idx === 1 ? "#E3ECF1" : "#F4E3E5",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img src={recommendIcon} alt="recommend"></img>
              <div className="dashboard-card-recommend">
                {recommendation.recommendationPercentage + "% Recommend"}
              </div>
            </div>
            <img
              style={{ width: "400px", height: "200px" }}
              src={cayman}
              alt="cayman"
            ></img>
            <div className="dashboard-card-title">{recommendation.title}</div>
            <div className="dashboard-card-details">
              <img src={manualgreyIcon} alt="manualgrey"></img>
              <div className="dashboard-card-detail">
                {recommendation.recommendations}
              </div>
              <img src={cogIcon} alt="cog"></img>
              <img src={electricIcon} alt="electric"></img>
              <div className="dashboard-card-detail right">
                {"$" + recommendation.price + "/h"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(Dashboard);
