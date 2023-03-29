import React, { useState } from "react";
import { Box, Divider, Grid, TextField } from "@mui/material";
import { lightTheme } from "../../../../Theme/theme";
import { MdOutlineLock } from "react-icons/md";
import Select from "react-select";
import "./CompareAggregate.css";

const CompareAggregate = () => {

const [showLock, setShowLock] = useState(true);





  const TotalGainLossData = [
    {
      name: "Total gain/loss:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Average daily gain/loss:",
      value: "$3578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Average daily volume",
      value: "4",
      lock: "./lockIcon.png",
    },
    {
      name: "Average per-share gain-loss:",
      value: "$665.00",
      lock: "./lockIcon.png",
    },
    {
      name: "Average trade gain/loss:",
      value: "$-989.00",
      lock: "./lockIcon.png",
    },
    {
      name: "Total number of trades:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Winning trades:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Losing trades:",
      value: "12 (46.0%)",
      lock: "./lockIcon.png",
    },
    {
      name: "Average winning trade:",
      value: "12 (46.0%)",
      lock: "./lockIcon.png",
    },
    {
      name: "Average losing trade:",
      value: "4(show)",
      lock: "./lockIcon.png",
    },
    {
      name: "Trade P&L standard deviation:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Probability of random chance:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "K-Ratio:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "System Quality Number (SQN):",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Kelly percentage:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Average hold time (winning trades):",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Average hold time (losing trades):",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Profit factor:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Largest gain:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Average position MFE:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Average position MFE:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Total commissions:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
    {
      name: "Total fess:",
      value: "$-4578.54",
      lock: "./lockIcon.png",
    },
  ];

  // styling
  const mainDiv = {
    padding: "25px 15px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,

    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };

  const gridItem = {
    marginTop: "30px",
    border: `1px solid ${lightTheme.borderColor}`,
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: "8px",
  };
  const generateReportBtn={
    color: `${lightTheme.whiteText}`,
    backgroundColor: `${lightTheme.headingTextColor}`,
    borderRadius: "8px",
    padding: "10px 0",
    width: "130px",
    border: "none",
    cursor: "pointer",
  }
  const resetBtn={
    color: `${lightTheme.headingTextColor}`,
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    border: "none",
    borderRadius: "8px",
    padding: "10px 0",
    width: "130px",
    marginLeft: "10px",
    cursor: "pointer",
    border: `1px solid ${lightTheme.borderColor}`,
  }
  const formMain={
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
  }
  const formInputText = {
    color: `${lightTheme.textColor}`,
    fontSize: "14px",
    fontWeight: "500",
    paddingBottom: "10px",
  }
  const staticGroupOne={
    backgroundColor: `${lightTheme.staticGroupOne}`,
    padding: "15px 15px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  }
  const staticGroupText={
    fontSize: "16px",
    fontWeight: "600",
    color: `${lightTheme.whiteText}`,
  }
  const name={
    fontWeight: "500",
    fontSize: "16px",
    color: `${lightTheme.headingTextColor}`,
  }

  const value={
    fontWeight: "400",
    fontSize: "16px",
    color: `${lightTheme.textColor}`,
  }
  const staticGroupTwo={
    backgroundColor: `${lightTheme.staticGroupTwo}`,
    padding: "15px 15px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  }
  return (
    <div>
      <Box sx={mainDiv}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: `${lightTheme.textColor}`, padding: "0 15px" }}>
            Quick Report:{" "}
          </p>
          <Select placeholder="Select" className="reportSelect" />
          <p style={{ color: `${lightTheme.textColor}`, padding: "0 10px" }}>
            or build a custom report below.
          </p>
        </div>
        <p
          style={{
            color: `${lightTheme.textColor}`,
            fontWeight: "500",
            padding: "25px 15px",
          }}
        >
          Note: this report ignores the global filter settings above; set
          specific group filters below.
        </p>
        {/* generate button  */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            style={generateReportBtn}
          >
            Generate Report
          </button>
          <button
            style={resetBtn}
          >
            Reset
          </button>
        </div>
        {/* report forms */}
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              borderRadius: "8px",
            }}
            p={2}
          >
            <div
              style={formMain}
            >
              <div>
                <p
                  style={formInputText}
                >
                  Symbol
                </p>
                <TextField id="outlined-multiline-flexible" />
              </div>
              <div>
                <p
                  style={formInputText}
                >
                  Tag
                </p>
                <TextField id="outlined-multiline-flexible" />
              </div>
            </div>
            <div
              style={formMain}
            >
              <div>
                <p
                  style={formInputText}
                >
                  Slide
                </p>
                <Select placeholder="All" className="slideSelect" />
              </div>
              <div>
                <p
                  style={formInputText}
                >
                  Start Date
                </p>
                <TextField id="outlined-multiline-flexible" />
              </div>
            </div>
            <div
              style={formMain}
            >
              <div>
                <p
                  style={formInputText}
                >
                  Duration
                </p>
                <Select placeholder="All" className="slideSelect" />
              </div>
              <div>
                <p
                  style={formInputText}
                >
                  End Date
                </p>
                <TextField id="outlined-multiline-flexible" />
              </div>
            </div>
            <div
              style={formMain}
            >
              <div>
                <p
                  style={formInputText}
                >
                  Trade P&L
                </p>
                <Select placeholder="All" className="slideSelect" />
              </div>
            </div>
          </Grid>
          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              borderRadius: "8px",
            }}
            p={2}
          >
            <div
              style={formMain}
            >
              <div>
                <p
                  style={formInputText}
                >
                  Symbol
                </p>
                <TextField id="outlined-multiline-flexible" />
              </div>
              <div>
                <p
                  style={formInputText}
                >
                  Tag
                </p>
                <TextField id="outlined-multiline-flexible" />
              </div>
            </div>
            <div
              style={formMain}
            >
              <div>
                <p
                  style={formInputText}
                >
                  Slide
                </p>
                <Select placeholder="All" className="slideSelect" />
              </div>
              <div>
                <p
                  style={formInputText}
                >
                  Start Date
                </p>
                <TextField id="outlined-multiline-flexible" />
              </div>
            </div>
            <div
              style={formMain}
            >
              <div>
                <p
                  style={formInputText}
                >
                  Duration
                </p>
                <Select placeholder="All" className="slideSelect" />
              </div>
              <div>
                <p
                  style={formInputText}
                >
                  End Date
                </p>
                <TextField id="outlined-multiline-flexible" />
              </div>
            </div>
            <div
              style={formMain}
            >
              <div>
                <p
                  style={formInputText}
                >
                  Trade P&L
                </p>
                <Select placeholder="All" className="slideSelect" />
              </div>
            </div>
          </Grid>
                  {/* Statistics Data Group */}
                  <Grid lg={5.8} md={12} sm={12} >
              <div
                style={{
                              borderRadius: "8px",
                              border:`1px solid ${lightTheme.borderColor}`
                }}
              >
                <div
                  style={staticGroupOne}
                >
                  <p
                    style={staticGroupText}
                  >
                   Statistics Group 1 
                  </p>
                </div>
                <Divider />
                {TotalGainLossData.map((data, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "15px 15px",
                        }}
                      >
                        <p
                          style={name}
                        >
                          {data.name}
                        </p>
                        <p
                          style={value}
                        >
                          {showLock ? (
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
            <Grid lg={5.8} md={12} sm={12} >
              <div
                style={{
                              borderRadius: "8px",
                              border:`1px solid ${lightTheme.borderColor}`
                }}
              >
                <div
                  style={staticGroupTwo}
                >
                  <p
                    style={staticGroupText}
                  >
                    Statistics Group 2
                  </p>
                </div>
                <Divider />
                {TotalGainLossData.map((data, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "15px 15px",
                        }}
                      >
                        <p
                          style={name}
                        >
                          {data.name}
                        </p>
                        <p
                          style={value}
                        >
                          {showLock ? (
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
      </Box>
    </div>
  );
};

export default CompareAggregate;
