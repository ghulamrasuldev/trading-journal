import React from "react";
import "./dailyTradeDetails.css";
import { Box, Divider } from "@mui/material";
import EditImg from "../../../assets/editNotes.png";
import DailyTradeTable from "./DailyTradeTable/DailyTradeTable";
import ModeChange from "../../../Theme/ChangeMode";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { base_Url } from "../../../Config/Config";
import apiService from "../../../services/api/api";

const DailyTradeDetails = () => {
  const lightTheme = ModeChange();

  const selectedDate = useSelector((state) => state.selectedDate.selectedDate);

  const [dailyTrade, setDailyTrade] = useState();
  const [passData, setPassData] = useState();
  const [dailyGraph, setDailyGraph] = useState({
    series: [],
    options: {},
  });

  const getDailyTrade = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/trade/calendar/${selectedDate}`,
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      const dataArray = data[0];
      setPassData(dataArray);
      if (dataArray.length > 0) {
        const closeTimes = [];
        const netplValues = [];

        const filterFields = dataArray[dataArray.length - 1];
        setDailyTrade(filterFields);

        for (let i = 0; i < dataArray.length - 1; i++) {
          const { closeTime, netpl } = dataArray[i];
          const fixedNetpl = parseFloat(netpl).toFixed(4);
          closeTimes.push(closeTime);
          netplValues.push(fixedNetpl);
        }
        setDailyGraph({
          series: [
            {
              data: netplValues,
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
              categories: closeTimes,
              labels: {
                style: {
                  colors: `${lightTheme.graphLabels}`,
                },
              },
            },
            yaxis: {
              // min: 0,
              // max: 2500,
              tickAmount: 5,
              labels: {
                style: {
                  colors: `${lightTheme.graphLabels}`,
                },
              },
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
      }
      
    } catch (error) {
      console.log("Error",error)
    }
    
  };

  useEffect(() => {
    if (selectedDate) {
      getDailyTrade();
    }
  }, [selectedDate]);

  const Graphs = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.02)",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    // border: '1px solid black',
    borderRadius: "8px",
    marginTop: "20px",
    paddingBottom: "20px",
    minWidth: "759px",
    // maxHeight: '461px',
  };
  return (
    <div>
      <Box sx={Graphs}>
        <div className="dividerDiv">
          <div className="EditNotesDiv">
            <p
              className="editNote"
              style={{ color: `${lightTheme.headingTextColor}` }}
            >
              Edit Notes
            </p>
            <img src={EditImg} alt="EditNote" height={15} />
          </div>
          <Divider />
        </div>
        <div >
          <div className="mainDetailDiv">
          <div className="chartDiv">
            <Chart
              options={dailyGraph.options}
              series={dailyGraph.series}
              type="area"
              height={180}
            />
          </div>
          <div className="chartDetailDiv">
            <div className="tradeDetails">
              {dailyTrade && Object.keys(dailyTrade).slice(0,3).map((key, i) => (
                <div className="insideTradeDetail" key={i}>
                  <div>
                    <p
                      style={{
                        color: `${lightTheme.lightDarkBlue}`,
                        width: "90px",
                      }}
                    >
                      {key}
                    </p>
                    <p
                      className="noOfTrade"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {dailyTrade[key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="tradeDetails">
              {dailyTrade && Object.keys(dailyTrade).slice(3,).map((key, i) => (
                <div className="insideTradeDetail" key={i}>
                  <div>
                    <p
                      style={{
                        color: `${lightTheme.lightDarkBlue}`,
                        width: "90px",
                      }}
                    >
                      {key}
                    </p>
                    <p
                      className="noOfTrade"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {dailyTrade[key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
            </div>
          {/* <DailyTradeGraph /> */}
          <Divider />
          <DailyTradeTable data={passData} />
        </div>
      </Box>
    </div>
  );
};

export default DailyTradeDetails;
