import { Box, Grid, Divider } from "@mui/material";
import React, { useState } from "react";
import "./Aggregate.css";
// import { lightTheme } from "../../../../Theme/theme";
import { MdOutlineLock } from "react-icons/md";
import ModeChange from "../../../../Theme/ChangeMode";
import { useEffect } from "react";
import Loading from '../../../../components/common/Loading'
import apiService from "../../../../services/api/api";

const AggregatePL = () => {
  const lightTheme = ModeChange();
  const [applyFllter, setApplyFilter] = useState("0");
  const [showLock, setShowLock] = useState(true);
  const [statistics1,setStatistics1]=useState()
  const [statistics2, setStatistics2] = useState()
  const [loading, setLoading] = useState(false)

 
  const getStatistic = async () => {
    setLoading(true);
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', '/performance/detail/tradeStatistics', { 'x-usertoken': authToken }, null)
      const data = res;
      const TotalProfitLossData = Object.entries(data[0]).map(([name, value]) => ({
        name,
        value,
      }));
      const AverageTradeProfitLoss = Object.entries(data[1]).map(([name, value]) => ({
        name,
        value,
      }));
      setStatistics1(TotalProfitLossData);
      setStatistics2(AverageTradeProfitLoss);
      setLoading(false);
    } catch (error) {
      console.log("Error",error)
    }
  }


  useEffect(() => {
    getStatistic();
  },[])

  // styling
  const mainDiv = {
    // padding: "30px 25px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };
  const gridStyle = {
    border: `1px solid ${lightTheme.selectBorderColor}`,
    backgroundColor: `${lightTheme.performanceComponentColor}`,
    borderRadius:'8px'
  };
  const mainPLDiv={
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 20px",
  }
  const selected = {
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
  };
  const notSelected = {
    background: "none",
    color: `${lightTheme.textColor}`
  };
  const statisticMain={
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 15px",
    borderBottom: `1px solid ${lightTheme.selectBorderColor}`,
  }
  const name={
    fontWeight: "500",
    fontSize: "16px",
    color: `${lightTheme.headingTextColor}`,
  }
  const nameVal={
    fontWeight: "400",
    fontSize: "16px",
    color: `${lightTheme.textColor}`,
  }



  return (
    <div>
      <Box sx={mainDiv}>
        <div
          style={mainPLDiv}
        >
          <p
            style={{
              color: `${lightTheme.headingTextColor}`,
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            P&L Type :
          </p>
          <div
            className="plBtnDiv"
            style={{
              backgroundColor: `${lightTheme.performanceBTnDiv}`,
            }}
          >
            <button
              className="left-roundedPLType"
              style={applyFllter == "0" ? selected : notSelected}
              onClick={() => setApplyFilter("0")}
            >
              $
            </button>
            <button
              className="plBtn"
              style={
                applyFllter == "1"
                  ? selected
                  : notSelected
              }
              onClick={() => setApplyFilter("1")}
            >
              T
            </button>
            <button
              className="right-roundedPLType"
              style={
                applyFllter == "2"
                  ? selected
                  : notSelected
              }
              onClick={() => setApplyFilter("2")}
            >
              R{" "}
              <MdOutlineLock
                color="red"
                size={10}
                style={
                  applyFllter == "2"
                    ? { color: `${lightTheme.whiteText}` }
                    : { color: `${lightTheme.textColor}` }
                }
              />
            </button>
          </div>
          <a
            href="#"
            style={{
              color: `${lightTheme.linkColor}`,
              textDecoration: "underline",
            }}
          >
            Help
          </a>
        </div>
        <div style={{ padding: "15px 15px" }}>
          <p
            style={{
              color: `${lightTheme.headingTextColor}`,
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            Statistics
          </p>
          {
            loading ?
              <Loading/>: <Grid container sx={gridStyle}>
              <Grid item lg={6} md={12} sm={12}>
                <div
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  {statistics1&&statistics1.map((data, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          style={statisticMain}
                        >
                          <p
                            style={name}
                          >
                            {data.name}
                          </p>
                          <p
                            style={nameVal}
                          >
                            {(data.name == "Kelly percentage:" &&
                              showLock === true) ||
                            (data.name == "Total number of trades:" &&
                              showLock === true) ||
                            (data.name == "Total Commissions:" &&
                              showLock === true) ||
                            (data.name == "Number of winning trades:" &&
                              showLock === true) ? (
                              <img src='lockIcon.png' alt="lockIcon" height={20} />
                            ) : (
                              `${data.value}`
                            )}
                          </p>
                        </div>
                        {/* <Divider /> */}
                      </>
                    );
                  })}
                </div>
              </Grid>
              <Grid item lg={6} md={12} sm={12}>
                <div
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  {statistics2&&statistics2.map((data, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          style={statisticMain}
                        >
                          <p
                            style={name}
                          >
                            {data.name}
                          </p>
                          <p
                            style={nameVal}
                          >
                            {(data.name == "Kelly percentage:" &&
                              showLock === true) ||
                            (data.name == "Total number of trades:" &&
                              showLock === true) ||
                            (data.name == "Total Commissions:" &&
                              showLock === true) ||
                            (data.name == "Number of winning trades:" &&
                              showLock === true) ? (
                              <img src='lockIcon.png' alt="lockIcon" height={20} />
                            ) : (
                              `${data.value}`
                            )}
                          </p>
                        </div>
                        {/* <Divider /> */}
                      </>
                    );
                  })}
                </div>
              </Grid>
            </Grid>
          }
          
        </div>
      </Box>
    </div>
  );
};

export default AggregatePL;
