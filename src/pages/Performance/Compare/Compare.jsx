import React, { useState } from "react";
import { Box, Divider, Grid, TextField } from "@mui/material";
import { lightTheme } from "../../../Theme/theme";

const Compare = () => {
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

  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container rowGap={4}>
          <Grid item lg={6} md={12} sm={12}>
            <p
              style={{
                color: `${lightTheme.headingTextColor}`,
                fontWeight: "500",
                fontSize: "16px",
                marginLeft: "20px",
              }}
            >
              Group#1
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  Symbol
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  Tags
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  Side
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "75px",
                  }}
                >
                  Start Date
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  Trade P&L
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  End Date
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <p
              style={{
                color: `${lightTheme.headingTextColor}`,
                fontWeight: "500",
                fontSize: "16px",
                marginLeft: "20px",
              }}
            >
              Group#2
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  Symbol
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  Tags
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  Side
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "75px",
                  }}
                >
                  Start Date
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  Trade P&L
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: `${lightTheme.textColor}`,
                    fontWeight: "500",
                    fontSize: "14px",
                    marginTop: "25px",
                    paddingRight: "5px",
                    width: "70px",
                  }}
                >
                  End Date
                </p>
                <TextField id="standard-basic" label=" " variant="standard" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container columnGap={12} rowGap={4}>
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <div
              style={{
                border: `1px solid ${lightTheme.borderColor}`,
                borderRadius: "8px",
              }}
            >
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
                        style={{
                          fontWeight: "500",
                          fontSize: "16px",
                          color: `${lightTheme.headingTextColor}`,
                        }}
                      >
                        {data.name}
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "16px",
                          color: `${lightTheme.textColor}`,
                        }}
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
          <Grid item lg={5.5} md={12} sm={12} sx={gridItem}>
            <div
              style={{
                border: `1px solid ${lightTheme.borderColor}`,
                borderRadius: "8px",
              }}
            >
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
                        style={{
                          fontWeight: "500",
                          fontSize: "16px",
                          color: `${lightTheme.headingTextColor}`,
                        }}
                      >
                        {data.name}
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "16px",
                          color: `${lightTheme.textColor}`,
                        }}
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
      </Box>
    </div>
  );
};

export default Compare;
