import React, { useState } from "react";
import "./dailyTradeGraph.css";
import Chart from "react-apexcharts";
import { Divider, Grid } from "@mui/material";
import ModeChange from "../../../Theme/ChangeMode";
// import { lightTheme } from "../../../Theme/theme";

const DailyTradeGraph = () => {
  const lightTheme = ModeChange();
  const date = new Date().toDateString();
  const [dailyGraph, setDailyGraph] = useState({
    series: [
      {
        data: [1100, 1500, 700, 30, 1003, 2000, 1110, 900, 1700],
      },
    ],
    options: {
      colors: [`${lightTheme.greenAreaGraph}`],
      chart: {
        // height: 80,
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
          "0.9284",
          "0.987650",
          "0.456700",
          "0.987654",
          "0.4444",
          "0.9812",
          "0.23333",
          "0.33232",
          "0.99999",
        ],
        labels: {
          style: {
            colors:`${lightTheme.graphLabels}`
          }
        }
      },
      yaxis: {
        min: 0,
        max: 2500,
        tickAmount: 5,
        labels: {
          style: {
            colors:`${lightTheme.graphLabels}`
          }
        }
      },
      grid: {
        position: "front",
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
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
    },
  });

  const tradeData = [
    {
      trades: "3",
      percentage: "70%",
    },
    {
      trades: "2",
      percentage: "80%",
    },
    {
      trades: "5",
      percentage: "60%",
    },
  ];

  return (
    <div className="mainDailyTrade" style={{backgroundColor:`${lightTheme.ComponentBackgroundColor}`}}>
      <p className="dailyTradeDate" style={{color:`${lightTheme.headingTextColor}`}}>{date}</p>
      <div >
        <Grid container>
          <Grid item lg={7}>
          <Chart
          options={dailyGraph.options}
          series={dailyGraph.series}
          type="area"
          height={250}
        />
          </Grid>
          <Grid item lg={5}>
          <div className="tradeDetails">
          {tradeData.map((trade, inde) => {
            return (
              <>
              <div className="insideTradeDetail">
                <div>
                  <p style={{color:`${lightTheme.lightDarkBlue}`}}>Total Trades</p>
                        <p className="noOfTrade" style={{color:`${lightTheme.textColor}`}}>{ trade.trades}</p>
                </div>
                <div>
                  <p style={{color:`${lightTheme.lightDarkBlue}`}}>Total Trades</p>
                        <p className="tradePercentage" style={{color:`${lightTheme.textColor}`}}>{trade.percentage}</p>
                    </div>
              </div>
                    <Divider flexItem orientation="vertical"/>
              </>
            );
          })}
        </div>
          </Grid>
        </Grid>
        
       
      </div>
    </div>
  );
};

export default DailyTradeGraph;
