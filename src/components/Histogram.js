import { memo } from "react";
import { SimpleBarChart } from "@carbon/charts-react";

import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";
const dataDay = [
  {
    group: "1PM",
    value: 256,
  },
  {
    group: "2PM",
    value: 120,
  },
  {
    group: "3PM",
    value: 15,
  },
  {
    group: "4PM",
    value: 20,
  },
  {
    group: "5PM",
    value: 25,
  },
  {
    group: "7PM",
    value: 200,
  },
  {
    group: "8PM",
    value: 150,
  },
];

const dataWeek = [
  {
    group: "January 1st",
    value: 1500,
  },
  {
    group: "January 8th",
    value: 1200,
  },
  {
    group: "January 15th",
    value: 1100,
  },
  {
    group: "January 22nd",
    value: 900,
  },
  {
    group: "January 29th",
    value: 200,
  },
  {
    group: "February 5th",
    value: 50,
  },
  {
    group: "February 12th",
    value: 1000,
  },
];

const dataMonth = [
  {
    group: "January",
    value: 10000,
  },
  {
    group: "February",
    value: 7000,
  },
  {
    group: "March",
    value: 5000,
  },
  {
    group: "April",
    value: 3000,
  },
  {
    group: "May",
    value: 2000,
  },
  {
    group: "June",
    value: 1000,
  },
  {
    group: "July",
    value: 500,
  },
  {
    group: "August",
    value: 100,
  },
];

const options = {
  axes: {
    left: { mapsTo: "value" },
    bottom: {
      mapsTo: "group",
      scaleType: "labels",
    },
  },
  BarOptions: {
    width: "100px",
  },
  color: {
    scale: {
      "1PM": "#2884FF",
      "2PM": "#2884FF",
      "3PM": "#2884FF",
      "4PM": "#2884FF",
      "5PM": "#2884FF",
      "6PM": "#2884FF",
      "7PM": "#2884FF",
      "8PM": "#2884FF",
      "January 1st": "#2884FF",
      "January 8th": "#2884FF",
      "January 15th": "#2884FF",
      "January 22nd": "#2884FF",
      "January 29th": "#2884FF",
      "February 5th": "#2884FF",
      "February 12th": "#2884FF",
      January: "#2884FF",
      February: "#2884FF",
      March: "#2884FF",
      April: "#2884FF",
      May: "#2884FF",
      June: "#2884FF",
      July: "#2884FF",
      August: "#2884FF",
    },
  },
  width: "100%",
  height: "400px",
};

function Histogram(props) {
  return (
    <SimpleBarChart
      data={
        props.unit === "day"
          ? dataDay
          : props.unit === "week"
          ? dataWeek
          : dataMonth
      }
      options={options}
    ></SimpleBarChart>
  );
}
export default memo(Histogram);
