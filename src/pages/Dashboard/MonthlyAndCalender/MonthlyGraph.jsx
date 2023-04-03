import React, { useEffect, useState } from "react";
import "./MonthlyGraph.css";
import { Divider } from "@mui/material";
import Chart from "react-apexcharts";
import ModeChange from "../../../Theme/ChangeMode";
import { useSelector } from "react-redux";

const MonthlyGraph = () => {
  
  const lightTheme = ModeChange();


  const [monthlyGraph, setMonthlyGraph] = useState({
    series: [
      {
        data: [1100, 1500, 700, 30, 1003, 2000, 1110, 900, 1700],
      },
    ],
    options: {
      colors: [`${lightTheme.greenAreaGraph}`],
      chart: {
        height: 380,
        type: "area",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        categories: [
          "5 Nov",
          "10 Nov",
          "15 Nov",
          "20 Nov",
          "25 Nov",
          "30 Nov",
          "5 Dec",
          "10 Dec",
          "15 Dec",
        ],
        labels: {
          style: {
            colors:`${lightTheme.graphLabels}`,
          },

          fontSize: '32px'
        },
      },
      yaxis: {
        min: 0,
        max: 2500,
        tickAmount: 5,
        labels: {
          style: {
            colors:`${lightTheme.graphLabels}`,
            // fontSize: '32px'
          },
        },
      },
      grid: {
        // position: 'back',

        borderColor: `${lightTheme.graphGridLinesColor}`,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      tooltip: {
        followCursor: false,
      },
      dataLabels: {
        enabled:false,
      },
      fill: {
        opacity: 1,
      },
    },
  });


  

  const graphTitle = {
    color: `${lightTheme.lightDarkBlue}`,
    fontWeight: "500",
    fontSize: "16px",
  };
  const graphTitleB = {
    color: `${lightTheme.textColor}`,
    fontWeight: "500",
    fontSize: "16px",
  };

  return (
    <div
      className="monthlyGrpahMain"
      style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
    >
      <div className="dailyAndMonthlyDiv">
        <p className="dailyM" style={graphTitle}>
          Daily
        </p>
        <Divider orientation="vertical" flexItem />
        <p className="monthlyM" style={graphTitleB}>
          Monthly
        </p>
      </div>
      <div className="monthlyGraphDiv">
        <Chart
          options={monthlyGraph.options}
          series={monthlyGraph.series}
          type="area"
          height={255}
        />
      </div>
    </div>
  );
};

export default MonthlyGraph;
