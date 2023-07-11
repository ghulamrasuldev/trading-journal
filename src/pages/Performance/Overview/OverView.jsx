import { Box, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import "./Overview.css";
import downArrow from "../../../assets/downArrow.png";
// import { lightTheme } from "../../../Theme/theme";
import DailyGraph from "./DailyGraphs/DailyGraph";
import DailyVolumegraph from "./DailyGraphs/DailyVolumegraph";
// import { TotalProfitLossData } from "./ConstantData";
// import { AverageTradeProfitLoss } from "./ConstantData";
import ModeChange from "../../../Theme/ChangeMode";
import { base_Url } from "../../../Config/Config";
import axios from "axios";
import { useEffect } from "react";
import Loading from "../../../components/common/Loading";
import apiService from "../../../services/api/api";

const OverView = () => {
  const lightTheme = ModeChange();
  const [TotalProfit, setTotalProfitLossData] = useState();
  const [AverageTradeProfit, setAverageTradeProfitLoss] = useState(
  );
  const [monthData, setMonthData] = useState([]);
  const [loading,setLoading]=useState(false)

  const getMonthData = async () => {
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', '/performance/overview/monthPerformance/netpl', { 'x-usertoken': authToken }, null)
      const data = res;
      setMonthData(data);
    } catch (error) {
      console.log("Error",error)
    }
   
  };

  
  const getStatistics = async () => {
    setLoading(true)
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', '/performance/overview/tradeStatistics', { 'x-usertoken': authToken }, null)
      const data = res;
      const TotalProfitLossData = Object.entries(data[0]).map(([name, value]) => ({
        name,
        value,
      }));
      const AverageTradeProfit = Object.entries(data[1]).map(([name, value]) => ({
        name,
        value,
      }));
      setTotalProfitLossData(TotalProfitLossData);
      setAverageTradeProfitLoss(AverageTradeProfit);
      setLoading(false)
    } catch (error) {
      console.log("Error",error)
    }
  }
    

  useEffect(() => {
    getMonthData();
    getStatistics();
  }, []);



  
  // styling
  const mainDiv = {
    padding: "15px 20px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };
  const month = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: "20px",
    fontWeight: "500",
  };
  const monthVal = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: "18px",
    fontWeight: "500",
  };
  const dateStyle = { color: `${lightTheme.dateColor}`, fontSize: "12px" };
  const profitLossMain = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 15px",
    borderBottom: `1px solid ${lightTheme.selectBorderColor}`,
  };
  const name = {
    fontWeight: "500",
    fontSize: "16px",
    color: `${lightTheme.headingTextColor}`,
  };
  const nameVal = {
    fontWeight: "400",
    fontSize: "16px",
    color: `${lightTheme.textColor}`,
  };
  return (
    <div>
      <Box sx={mainDiv}>
        <div className="overViewMain">
          <p style={{ color: `${lightTheme.profit}` }}>P&L Showing</p>
          <div className="insideOverViewMain">
            <p
              style={{ color: `${lightTheme.textColor}`, paddingRight: "10px" }}
            >
              NET P&L
            </p>
            <img src={downArrow} alt="downArrow" height={5} />
          </div>
        </div>
        <div style={{ padding: "10px 0" }}>
          <p
            style={{
              color: `${lightTheme.headingTextColor}`,
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Your Starts
          </p>
          <p style={dateStyle}>(FROM MAY 10,2022 TO MAY 11, 2022)</p>
          <Grid container my={3} rowGap={4}>
            {monthData &&
              monthData.map((item) => {
                return (
                  <Grid item lg={3} md={6} sm={12}>
                    {item.BestMonth && (
                      <>
                        <p style={month}>Best Month</p>
                        <p style={monthVal}>{`$${item.BestMonth.toFixed(
                          2
                        )}`}</p>
                        {item.date && <p style={dateStyle}>In {item.date}</p>}
                      </>
                    )}

                    {item.LowestMonth && (
                      <>
                        <p style={month}>Lowest Month</p>
                        <p style={monthVal}>{`$${item.LowestMonth.toFixed(
                          2
                        )}`}</p>
                        {item.date && <p style={dateStyle}>In {item.date}</p>}
                      </>
                    )}

                    {item.Average && (
                      <>
                        <p style={month}>Average</p>
                        <p style={monthVal}>{`$${item.Average.toFixed(2)}`}</p>
                      </>
                    )}
                  </Grid>
                );
              })}
          </Grid>
        </div>
        {
          loading ?
           <Loading/> : <Grid container rowGap={4} columnGap={4}>
            <Grid item lg={5.7} md={12} sm={12}>
              <div
                style={{
                  border: `1px solid ${lightTheme.selectBorderColor}`,
                  borderRadius: "8px",
                  backgroundColor: `${lightTheme.performanceComponentColor}`,
                }}
              >
                {TotalProfit&&TotalProfit.map((data, index) => {
                  return (
                    <>
                      <div key={index} style={profitLossMain}>
                        <p style={name}>{data.name}</p>
                        <p style={nameVal}>{data.value}</p>
                      </div>
                      {/* <Divider /> */}
                    </>
                  );
                })}
              </div>
            </Grid>
            <Grid item lg={5.7} md={12} sm={12}>
              <div
                style={{
                  border: `1px solid ${lightTheme.selectBorderColor}`,
                  borderRadius: "8px",
                  backgroundColor: `${lightTheme.performanceComponentColor}`,
                }}
              >
                {AverageTradeProfit&&AverageTradeProfit.map((data, index) => {
                  return (
                    <>
                      <div key={index} style={profitLossMain}>
                        <p style={name}>{data.name}</p>
                        <p style={nameVal}>{data.value}</p>
                      </div>
                      {/* <Divider /> */}
                    </>
                  );
                })}
              </div>
            </Grid>
          </Grid>
              }
        
      </Box>
      <DailyGraph />
    </div>
  );
};

export default OverView;
