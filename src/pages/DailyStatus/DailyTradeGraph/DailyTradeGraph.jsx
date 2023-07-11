import React, { useEffect, useState } from "react";
import "./dailyTradeGraph.css";
import axios from "axios";
import Chart from "react-apexcharts";
import { Divider, Grid } from "@mui/material";
import ModeChange from "../../../Theme/ChangeMode";
import { base_Url } from "../../../Config/Config";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../../Redux/AllAccess";
import DailyTradeDetails from "../DailyTradeDetails/DailyTradeDetails";
import DailyTradeTable from "../DailyTradeDetails/DailyTradeTable/DailyTradeTable";
import apiService from "../../../services/api/api";

const DailyTradeGraph = () => {
  const lightTheme = ModeChange();
  const comingDate = useSelector((state) => state.date.formattedDate);

  const dispatch = useDispatch();
  const { selectedDate } = bindActionCreators(actionCreator, dispatch);

  const [passData, setPassData] = useState();

  const [tradeDate, setTradeDate] = useState([]);
  const [dailyTrade, setDailyTrade] = useState();
  const [dailyGraph, setDailyGraph] = useState({
    series: [],
    options: {},
  });
  const [historicalData, setHistoricalData] = useState([]);

  const getDate = (date) => {
    const regex = /^(\w{2}) (\w{3}) (\d{2}) (\d{4}).*$/;
    const monthMap = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    const dateString = date.toString();
    const formattedDate = dateString.replace(regex, (match, p1, p2, p3, p4) => {
      return `${p1}-${monthMap[p2]}-${p4}`;
    });

    const finalDate = formattedDate.replaceAll("/", "-");
    selectedDate(finalDate);
  };

  const getDailyTrade = async () => {
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/trade/calendar/${comingDate}`,
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
        // Store the historical data
        const tradeDate = dataArray[0].closeDate;
        setHistoricalData((prevData) => [
          ...prevData,
          {
            closeTimes: closeTimes,
            netplValues: netplValues,
            tradeDate,
            ...filterFields,
          },
        ]);
        setTradeDate((prevData) => [
          ...prevData,
          { tradeDate, historicalData },
        ]); 
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

  const renderHistoricalGraphs = () => {
    if (historicalData.length > 0) {
      return historicalData.map((data, index) => (
      
        <div
          key={index}
          style={{
            width: "100%",
            margin: "10px 0",
            backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
          }}
          onClick={() => {
            getDate(data.tradeDate);
          }}
        >
          {/* <p style={{padding:'10px 15px'}}>{data.tradeDate}</p> */}
          <Chart
            options={dailyGraph.options}
            series={[{ data: data.netplValues }]}
            type="area"
            height={180}
          />
          {/* <DailyTradeTable data={data} /> */}
        </div>
      ));
    }
    return null; // or render a placeholder if there is no historical data or netplValues
  };

  const renderHistoricalTradeDetails = () => {
    if (historicalData.length > 0) {
      return historicalData.map((dataArray, index) => {
        const { GrossPL, Loser, TotalTrades, Volume, Win, Winners } = dataArray; // Destructure the desired properties from dataArray

        const tradeDetails = {
          TotalTrades,
          Volume,
          Win,
          Winners,
          Loser,
          GrossPL,
        };

        const entries = Object.entries(tradeDetails);

        return (
          <div key={index}>
            <div
              style={{
                width: "100%",
                minHeight: "195px",
                margin: "10px 0",
                backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
              }}
            >
              <div className="tradeDetails">
                {entries.slice(0, 3).map(([key, value], i) => (
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
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tradeDetails">
                {entries.slice(3).map(([key, value], i) => (
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
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      });
    }

    return null; // or render a placeholder if there is no historical data
  };

  const renderDailyTradeTables = () => {
    return (
      // <DailyTradeTable data={passData} />
      <div style={{ width: "100%" }}>
        <div style={mainGrid}>
          <div style={{ width: "100%", display: "flex" }}>
            <div style={{ width: "55%" }}>{renderHistoricalGraphs()}</div>
            <div style={{ width: "45%" }}>{renderHistoricalTradeDetails()}</div>
          </div>
          {/* <div style={{ width: "100%" }}>
            <DailyTradeTable data={passData} />
          </div> */}
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (comingDate) {
      getDailyTrade();
    }
  }, [comingDate]);

  const mainGrid = {
    display: "flex",
    width: "100%",
    borderRadius: "8px",
  };
  return (
    <div className="mainDailyTrade">
      <p
        className="dailyTradeDate"
        style={{ color: `${lightTheme.headingTextColor}` }}
      >
        {/* {comingDate} */}
      </p>
      <div>
        {comingDate ? (
          <Grid container>
            <div style={mainGrid}>
              <div style={{ width:'55%' }}>{renderHistoricalGraphs()}</div>
              <div style={{ width:'45%'}}>
                {renderHistoricalTradeDetails()}
              </div>
              <Divider flexItem />
            </div>
            {/* {renderDailyTradeTables()} */}
          </Grid>
        ) : (
          <p className="loading">Please Select a date from calendar</p>
        )}
      </div>
    </div>
  );
};

export default DailyTradeGraph;
