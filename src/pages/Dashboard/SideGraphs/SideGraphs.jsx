import React, { useEffect, useState } from "react";
import UpcomingEvents from ".././upcomingEvents/upcomingEvents";
import "./SideGraphs.css";
import Chart from "react-apexcharts";
import { Divider } from "@mui/material";
import ModeChange from "../../../Theme/ChangeMode";
import axios from "axios";
import apiService from "../../../services/api/api";

const SideGraphs = () => {
  const lightTheme = ModeChange();
  const [toggle, setToggle] = useState("0");

  const [endPoint, setEndPoint] = useState("daily");

  const [graphData, setGraphData] = useState({
    series: [],
    options: {},
  });
  const [pieChart, setPieChart] = useState();

  const getWinlossData = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/dashboard/trade/profitloss/${endPoint}`,
        { "x-usertoken": authToken },
        null
      );
      const data  = res;
      if (endPoint === "daily") {
        console.log(data);
        let winLossPercentage = [];
        setPieChart();
        Object.values(data).forEach((item) => {
          setPieChart(item);
          winLossPercentage.push(item.WinPercentage);
          winLossPercentage.push(item.LossPercentage);
        });

        setGraphData({
          series: winLossPercentage,
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
      } else if (endPoint === "weekly" || endPoint === "monthly") {
        setPieChart();
        let winLossPercentage = [];
        setPieChart(data);
        winLossPercentage.push(data.WinPercentage);
        winLossPercentage.push(data.LossPercentage);

        setGraphData({
          series: winLossPercentage,
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
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getWinlossData();
  }, [endPoint]);

  // console.log(pieChart.dailyWinPercentage)

  const graphTitle = {
    color: `${lightTheme.lightDarkBlue}`,
    fontWeight: "500",
    fontSize: "16px",
    padding: "0 10px",
    cursor: "pointer",
  };

  const graphTitleB = {
    color: `${lightTheme.textColor}`,
    fontWeight: "500",
    fontSize: "16px",
    padding: "0 10px",
    cursor: "pointer",
  };

  const winloss = {
    color: `${lightTheme.textColor}`,
    fontWeight: "500",
    fontSize: "14px",
    marginLeft: "10px",
    marginTop: "10px",
  };

  return (
    <div>
      <div className="dailyStatus">
        <div className="dailyStatusTop">
          <div className="endPoints">
            <p
              style={toggle === "0" ? graphTitle : graphTitleB}
              onClick={() => {
                setEndPoint("daily");
                setToggle("0");
              }}
            >
              Daily
            </p>
            <Divider orientation="vertical" flexItem />
            <p
              style={toggle === "1" ? graphTitle : graphTitleB}
              onClick={() => {
                setEndPoint("weekly");
                setToggle("1");
              }}
            >
              Weekly
            </p>
            <Divider orientation="vertical" flexItem />
            <p
              style={toggle === "2" ? graphTitle : graphTitleB}
              onClick={() => {
                setEndPoint("monthly");
                setToggle("2");
              }}
            >
              Monthly
            </p>
          </div>
          <p className="winLoss" style={winloss}>
            Win/Loss %
          </p>
        </div>
        <div className="pieChart">
          <Chart
            style={{
              marginLeft: "30px",
              marginTop: "-10px",
              marginBottom: "26px",
            }}
            options={graphData.options}
            series={graphData.series}
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
              {pieChart && pieChart.WinNetpl.toFixed(4)}
            </p>
          </div>
          <Divider orientation="vertical" variant="fullWidth" flexItem />
          <div style={{ padding: "15px 15px" }}>
            <p className="lossPie" style={{ color: `${lightTheme.loss}` }}>
              Loss
            </p>
            <p className="lossValue" style={{ color: `${lightTheme.loss}` }}>
              {pieChart && pieChart.LossNetpl.toFixed(4)}
            </p>
          </div>
        </div>
        {/* <Divider /> */}
      </div>
    </div>
  );
};

export default SideGraphs;
