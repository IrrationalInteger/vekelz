import { memo, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
function Chart(props) {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );
    chart.get("colors").set("colors", [am5.color(0xff764c)]);

    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    function generateData(time) {
      value = Math.round(Math.random() * 10 - 5 + value);
      console.log(time);
      am5.time.add(
        time,
        props.unit === "day" ? "hour" : props.unit === "week" ? "day" : "week",
        1
      );
      return {
        date: time.getTime(),
        value: value,
      };
    }

    function generateDatas(count) {
      let data = [];
      let time = new Date();
      time.setHours(props.unit === "day" ? 7 : 0);

      for (let i = 0; i < count; i++) {
        data.push(generateData(time));
        time.setHours(
          time.getHours() +
            (props.unit === "day" ? 2 : props.unit === "week" ? 24 : 7 * 24)
        );
      }
      return data;
    }

    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.5,
        baseInterval: {
          timeUnit:
            props.unit === "day"
              ? "hour"
              : props.unit === "week"
              ? "day"
              : "week",
          count: 2,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          pan: "zoom",
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 1,
        visible: false,
        renderer: am5xy.AxisRendererY.new(root, {
          pan: "zoom",
        }),
      })
    );

    let series = chart.series.push(
      am5xy.SmoothedXLineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,

        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.fills.template.setAll({
      visible: true,

      fillOpacity: 0.2,
    });

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Circle.new(root, {
          radius: 4,
          stroke: root.interfaceColors.get("background"),
          strokeWidth: 2,
          fill: series.get("fill"),
        }),
      });
    });

    let data = generateDatas(8);
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}
export default memo(Chart);
