import React, { useState } from "react";
import { Box, Divider, Grid, TextField } from "@mui/material";
// import { lightTheme } from "../../../Theme/theme";
import { MdOutlineLock } from "react-icons/md";
import Chart from "react-apexcharts";
import ModeChange from "../../../Theme/ChangeMode";

const Drawdown = () => {
  const lightTheme = ModeChange();
  const [showLock, setShowLock] = useState(true);
  const [applyFllter, setApplyFilter] = useState("0");
  const [tradeDistributionGraph, setTradeDistributionGraph] = useState({
    series: [
      {
        data: [4, 7, 5, 3, 8, 9],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri"],
      },
      // grid: {
      //   yaxis: {
      //     lines: {
      //       show: false
      //     }
      //   },
      //   xaxis: {
      //     lines: {
      //       show: true
      //     }
      //   }
      // },
      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [performanceGraph, setPerformanceGraph] = useState({
    series: [
      {
        data: [-4, , -7, , -8, -9],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ["#EDC161", "#6CB9AD", "#FF696D", "#5D45DB", "#689BE2"],
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: {
        // reversed: true,
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri"],

        labels: {
          formatter: function (x) {
            return "$" + x.toFixed(0);
          },
        },
      },
    },
  });
  const [volatilityGraph, setVolatility] = useState({
    series: [
      {
        name: "Desktops",
        data: [
          130, 241, 315, 544, 649, 262, 169, 91, 48, 12, 90, 98, 134, 32, 56,
          864, 333, 12, 34, 45, 654, 23, 11, 22, 98, 12, 56, 34, 14, 130, 241,
          315, 544, 649, 262, 169, 91, 48, 12, 90, 98, 134, 32, 56, 864, 333,
          12, 34, 45, 654, 23, 11, 22, 98, 12, 56, 34, 14,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      // title: {
      //   text: 'Product Trends by Month',
      //   align: 'left',
      // },
      grid: {
        row: {
          // colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        tickAmount: 5,
        min: 0,
      },
    },
  });

  // statistics Data
  const DrawdownData = [
    {
      name: "Average Drawdown:",
      val: "1",
      lock: "./lockIcon.png",
    },
    {
      name: "Average number of days in drawdown:",
      val: "2",
      lock: "./lockIcon.png",
    },
    {
      name: "Average trades in Drawdown:",
      val: "3",
      lock: "./lockIcon.png",
    },
    {
      name: "Biggest Drawdown:",
      val: "4",
      lock: "./lockIcon.png",
    },
    {
      name: "Number of days in Drawdown:",
      val: "5",
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
    backgroundColor: `${lightTheme.performanceComponentColor}`,
    borderRadius: "8px",
  };
  const silverGold = {
    fontSize: "18px",
    fontWeight: "500",
    color: `${lightTheme.textColor}`,
    textAlign: "center",
    padding: "5px 0",
  };
  const plMain = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 20px",
  };
  const plType = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: "500",
    fontSize: "14px",
  };
  const selected = {
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
  };
  const notSelected = { background: "none", color: `${lightTheme.textColor}` };
  const statistic = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: "20px",
    fontWeight: "500",
    marginLeft: "10px",
    marginBottom: "35px",
  };
  const dataMain = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 15px",
  };
  const name = {
    fontWeight: "500",
    fontSize: "16px",
    color: `${lightTheme.headingTextColor}`,
  };
  const value = {
    fontWeight: "400",
    fontSize: "16px",
    color: `${lightTheme.textColor}`,
  };
  const graphTitle = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: "500",
    fontSize: "16px",
    marginLeft: "20px",
    marginTop: "10px",
  };
  return (
    <div>
      <Box sx={mainDiv}>
        <div>
          <p style={silverGold}>
            These reports are only available for silver and gold users.
            <span style={{ color: `${lightTheme.headingTextColor}` }}>
              Upgrade now!
            </span>
          </p>
          {/* P & L type filters */}
          <div style={plMain}>
            <p style={plType}>P&L Type :</p>
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
                style={applyFllter == "1" ? selected : notSelected}
                onClick={() => setApplyFilter("1")}
              >
                T
              </button>
              <button
                className="right-roundedPLType"
                style={applyFllter == "2" ? selected : notSelected}
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
          <p style={statistic}>Statistics</p>
          <Grid container spacing={2}>
            {DrawdownData.map((data, index) => {
              return (
                <>
                  <Grid
                    item
                    lg={6}
                    md={12}
                    sm={12}
                    style={{ paddingTop: "0px"}}
                    
                  >
                    {/* statictics data maping */}
                    <div
                      style={{
                        border: `1px solid ${lightTheme.borderColor}`,
                        backgroundColor:`${lightTheme.performanceComponentColor}` 

                      }}
                    >
                      <div key={index} style={dataMain}>
                        <p style={name}>{data.name}</p>
                        <p style={value}>
                          {showLock ? (
                            <img src={data.lock} alt="lockIcon" height={20} />
                          ) : (
                            `${data.val}`
                          )}
                        </p>
                      </div>
                      {/* <Divider /> */}
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Grid container columnGap={4} rowGap={4} my={3}>
            <Grid item lg={5.8} md={12} sm={12} sx={gridItem}>
              <p style={graphTitle}>
                Drawdown Increase Distribution By Day Of Week
              </p>
              <Chart
                options={tradeDistributionGraph.options}
                series={tradeDistributionGraph.series}
                type="bar"
                height={300}
              />
            </Grid>
            <Grid item lg={5.8} md={12} sm={12} sx={gridItem}>
              <p style={graphTitle}>Performance by day of week</p>

              <Chart
                options={performanceGraph.options}
                series={performanceGraph.series}
                type="bar"
                height={300}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={5.8} md={12} sm={12} sx={gridItem}>
              <p style={graphTitle}>P&L Volatility</p>
              <Chart
                options={volatilityGraph.options}
                series={volatilityGraph.series}
                type="line"
                height={350}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default Drawdown;
