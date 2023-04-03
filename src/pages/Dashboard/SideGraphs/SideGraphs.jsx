import React, { useState } from "react";
import UpcomingEvents from ".././upcomingEvents/upcomingEvents";
import "./SideGraphs.css";
import Chart from "react-apexcharts";
import { Divider } from "@mui/material";
import TradeBarGraph from "./TradeBarGraph/TradeBarGraph";
import ModeChange from "../../../Theme/ChangeMode";
// import {lightTheme} from '../../../Theme/theme'

const SideGraphs = () => {
  const lightTheme = ModeChange();
  const [pieChart, setPieChart] = useState({
    series: [50, 50],
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          customScale: 0.9,
          donut: {
            labels: {
              show: true,
            },
          },
        },
      },
      colors: [
        `${lightTheme.darkGreencolorGraph}`,
        `${lightTheme.darkRedcolorGraph}`,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 150,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  const graphTitle = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: "500",
    fontSize: "18px",
  };

  return (
    <div>
      <div className="dailyStatus">
        <div className="dailyStatusTop">
          <p className="daily" style={graphTitle}>
            Daily
          </p>
          <p className="winLoss" style={{ color: `${lightTheme.textColor}` }}>
            Win/Loss %
          </p>
        </div>
        <div className="pieChart">
          <Chart
            
            style={{marginLeft:'30px',marginTop:'-10px',marginBottom:'26px'}}
            options={pieChart.options}
            series={pieChart.series}
            type="donut"
            height={156}
          />
        </div>
        <Divider />
        <div className="winLossPercentage">
          <div style={{ padding: "15px 15px" }}>
            <p className="win" style={{ color: `${lightTheme.profit}` }}>
              Win
            </p>
            <p className="winValue" style={{ color: `${lightTheme.profit}` }}>
              79,283%
            </p>
          </div>
          <Divider orientation="vertical" variant="fullWidth" flexItem />
          <div style={{ padding: "15px 15px" }}>
            <p className="lossPie" style={{ color: `${lightTheme.loss}` }}>
              Loss
            </p>
            <p className="lossValue" style={{ color: `${lightTheme.loss}` }}>
              79,283%
            </p>
          </div>
        </div>
        {/* <Divider /> */}
      </div>
    </div>
  );
};

export default SideGraphs;
