import { Box, Grid, Divider } from "@mui/material";
import React, { useState } from "react";
import "./Aggregate.css";
// import { lightTheme } from "../../../../Theme/theme";
import { MdOutlineLock } from "react-icons/md";
import ModeChange from "../../../../Theme/ChangeMode";

const AggregatePL = () => {
  const lightTheme = ModeChange();
  const [applyFllter, setApplyFilter] = useState("0");
  const [showLock, setShowLock] = useState(true);

  //  total gain loss Data
  const TotalGainLossData = [
    {
      name: "Total gain/loss:",
      value: "$-4578.54",
    },
    {
      name: "Average daily gain/loss:",
      value: "$3578.54",
    },
    {
      name: "Average daily volume",
      value: "4",
    },
    {
      name: "Average winning trade:",
      value: "$665.00",
    },
    {
      name: "Average losing trade:",
      value: "$-989.00",
    },
    {
      name: "Kelly percentage:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Total number of trades:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Number of losing trades:",
      value: "12 (46.0%)",
    },
    {
      name: "Max consecutive wins:",
      value: "12 (46.0%)",
    },
    {
      name: "Average position MFE:",
      value: "4(show)",
    },
    {
      name: "Total Commissions:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Number of winning trades:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
  ];

  // styling
  const mainDiv = {
    // padding: "30px 25px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };
  const gridStyle = {
    border: `1px solid ${lightTheme.borderColor}`,
    backgroundColor:`${lightTheme.performanceComponentColor}`
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
          <Grid container sx={gridStyle}>
            <Grid item lg={6}>
              <div
                style={{
                  borderRadius: "8px",
                }}
              >
                {TotalGainLossData.map((data, index) => {
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
                            <img src={data.lock} alt="lockIcon" height={20} />
                          ) : (
                            `${data.value}`
                          )}
                        </p>
                      </div>
                      <Divider />
                    </>
                  );
                })}
              </div>
            </Grid>
            <Grid item lg={6}>
              <div
                style={{
                  borderRadius: "8px",
                }}
              >
                {TotalGainLossData.map((data, index) => {
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
                            <img src={data.lock} alt="lockIcon" height={20} />
                          ) : (
                            `${data.value}`
                          )}
                        </p>
                      </div>
                      <Divider />
                    </>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default AggregatePL;
