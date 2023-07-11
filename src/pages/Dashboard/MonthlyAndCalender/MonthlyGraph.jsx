import React, { useEffect, useState } from "react";
import "./MonthlyGraph.css";
import { Divider } from "@mui/material";
import Chart from "react-apexcharts";
import ModeChange from "../../../Theme/ChangeMode";
import { useSelector } from "react-redux";
import axios from "axios";
import { base_Url } from "../../../Config/Config";
import apiService from "../../../services/api/api";

const MonthlyGraph = () => {
  
  const lightTheme = ModeChange();

  const mode = useSelector(state => state.mode);

  const [toggle, setToggle] = useState('0');

  const [endPoint, setEndPoint] = useState('daily');
  const [netplData, setNetplData] = useState();
  const [GraphData, setGraphData] = useState({
    series: [],
    options:{},
  })

  const getNetpl = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/dashboard/trade/netpl/${endPoint}`,
        { "x-usertoken": authToken },
        null
      );
      const data  = res;
      setNetplData(data);
  
      // Map the data to series and options
      const seriesData = [];
      const xaxisCategories = [];
      if (endPoint === 'daily') {
        
  
        Object.keys(data).forEach((date) => {
          const trades = data[date].trades;
          const netplValues = trades.map((trade) => trade.updatedNetpl.toFixed(4));
          const timeValues = trades.map((trade) => trade.time);
  
          seriesData.push({
            data: netplValues,
          });
  
          xaxisCategories.push(...timeValues);
        });
  
        setGraphData({
          series: seriesData,
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
              categories: xaxisCategories,
              labels: {
                style: {
                  colors: "red",
                },
                fontSize: "32px",
              },
            },
            yaxis: {
              // min: 0,
              // max: 2500,
              tickAmount: 5,
              labels: {
                style: {
                  colors: "red",
                },
              },
            },
            grid: {
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
              enabled: false,
            },
            fill: {
              opacity: 1,
            },
          },
        });
      }
      if (endPoint === 'weekly' || endPoint === 'monthly') {
        const dates = Object.keys(data);
        const netplValues = Object.values(data).map((item) => item.updatedNetpl.toFixed(4));
  
        setGraphData({
          series: [
            {
              data: netplValues,
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
              categories: dates,
              labels: {
                style: {
                  colors: "red",
                },
                fontSize: "32px",
              },
            },
            yaxis: {
              // min: 0,
              // max: 2500,
              tickAmount: 5,
              labels: {
                style: {
                  colors: "red",
                },
              },
            },
            grid: {
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
              enabled: false,
            },
            fill: {
              opacity: 1,
            },
          },
        });
      }
    } catch (error) {
      console.log("error",error)
    }
    
  };
  

  let check = false;
  useEffect(() => {
    if (check === false) {
      getNetpl();
      check = true;
    }
  },[endPoint])
  

  

  const graphTitle = {
    color: `${lightTheme.lightDarkBlue}`,
    fontWeight: "500",
    fontSize: "16px",
    padding: '0 10px',
    cursor:'pointer'
  };
  const graphTitleB = {
    color: `${lightTheme.textColor}`,
    fontWeight: "500",
    fontSize: "16px",
    padding: '0 10px',
    cursor:'pointer'
  };

  return (
    <div
      className="monthlyGrpahMain"
      style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
    >
      <div className="dailyAndMonthlyDiv">
        <p style={(toggle==='0')?graphTitle:graphTitleB} onClick={() => {
          setEndPoint('daily')
          setToggle('0')
        }}>
          Daily
        </p>
        <Divider orientation="vertical" flexItem />
        <p  style={(toggle==='1')?graphTitle:graphTitleB} onClick={() => {
          setEndPoint('weekly')
          setToggle('1')
        }}>
          Weekly
        </p>
        <Divider orientation="vertical" flexItem />
        <p  style={(toggle==='2')?graphTitle:graphTitleB} onClick={() => {
          setEndPoint('monthly')
          setToggle('2')
        }}>
          Monthly
        </p>
      </div>
      <div className="monthlyGraphDiv">
        <Chart
          options={GraphData.options}
          series={GraphData.series}
          type="area"
          height={255}
        />
      </div>
    </div>
  );
};

export default MonthlyGraph;
