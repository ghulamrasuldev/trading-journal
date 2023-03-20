import React, { useState } from "react";
import "./Detail.css";
import { lightTheme } from "../../../Theme/theme";
import { Box } from "@mui/material";
import AggregatePL from "./AggredatePL/AggregatePL";
import PerTradeAverage from "./PerTradeAverage/PerTradeAverage";
import DaysAndTimes from './DaysAndTimes/DaysAndTimes'
const Detail = () => {
  const [showComponent, setShowComponent] = useState("0");

  return (
    <div>
      <Box>
        <div
          className="detailMain"
          style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}
        >
          <div className="detailBtns">
            <p>Details</p>
            <div
              style={{
                backgroundColor: `${lightTheme.performanceButtonsBackground}`,
              }}
              className="detailBTnDiv"
            >
              <button
                className="detailBtn"
                style={
                  showComponent == "0"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("0")}
              >
                Aggregate P&L
              </button>
              <button
                className="detailBtn"
                style={
                  showComponent == "1"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("1")}
              >
                Per-Trade Average
              </button>
              <button
                className="detailBtn"
                style={
                  showComponent == "2"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("2")}
              >
                Days/Times
              </button>
              <button
                className="detailBtn"
                style={
                  showComponent == "3"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("3")}
              >
                Price/Volume
              </button>
              <button
                className="detailBtn"
                style={
                  showComponent == "4"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("4")}
              >
                Instrument
              </button>
              <button
                className="detailBtn"
                style={
                  showComponent == "5"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("5")}
              >
                Market Behaviour
              </button>
              <button
                className="detailBtn"
                style={
                  showComponent == "6"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("6")}
              >
                Wins/Loss/Expectation
              </button>
              <button
                className="detailBtn"
                style={
                  showComponent == "7"
                    ? {
                        backgroundColor: `${lightTheme.headingTextColor}`,
                        color: `${lightTheme.whiteText}`,
                      }
                    : { background: "none", color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent("7")}
              >
                Liquidity
              </button>
            </div>
          </div>
              </div>
              <div>
                  {
                      (showComponent=='0')? <AggregatePL/>:null
                  }
                  {
                      (showComponent=='1')? <PerTradeAverage/>:null
                  }
                  {
                      (showComponent=='2')? <DaysAndTimes/>:null
                  }
              </div>
      </Box>
    </div>
  );
};

export default Detail;
