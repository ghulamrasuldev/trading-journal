import React, { useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Box, Divider, Grid } from "@mui/material";
// import { lightTheme } from "../../../Theme/theme";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineNoteAdd } from "react-icons/md";
import Chart from "react-apexcharts";
import DailyCalendar from "../../../components/common/DailyCalendar/DailyCalendar";

const DailyStats = () => {
  const lightTheme = ModeChange();
  const [areaChart, setAreaChart] = useState({
    series: [
      {
        data: [0, 0, 400, 600, 900, 900, 1510, 1900, 2300],
      },
    ],
    options: {
      colors: [`${lightTheme.greenAreaGraph}`],
      chart: {
        // height: 80,
        type: 'area',
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: 'straight',
      },
      xaxis: {
        categories: [
          "0.9284",
          "0.987650",
          "0.456700",
          "0.987654",
          "0.4444",
          "0.9812",
          "0.23333",
          "0.33232",
          "0.99999",
        ],
        show: false,

        labels: {
          show: false,
          
        },
      },

      yaxis: {
        min: 0,
        max: 2500,
        tickAmount: 5,
      },
      grid: {
        // position: "front",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      tooltip: {
        followCursor: true,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
    },
  });

  // styling
  const mainDiv = {
    padding: '30px 25px',
    backgroundColor: `${lightTheme.PageBackgroundColor}`,
  };
  const DateStyle = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: '600',
    fontSize: '18px',
    margin: '0 10px',
  };
  const NetPLStyle = {
    color: `${lightTheme.netPL}`,
    fontWeight: '600',
    fontSize: '18px',
    margin: '0 10px',
  };
  const DateAndPLDiv = {
    display: 'flex',
    alignItems: 'center',
  };
  const EditNoteDiv = {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 25px',
    border: `1px solid ${lightTheme.headingTextColor}`,
    borderRadius: '8px',
    marginRight: '10px',
    cursor: 'pointer',
  };
  const EditNote = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: '14px',
    fontWeight: '500',
    marginLeft: '5px',
    marginTop: '3px',
  };
  const mainDivStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px',
  };

  const mainChartDiv = {
    display: 'flex',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
  };
  const mainTradeDiv = {
    display: 'flex',
    // alignItems: "center",
    justifyContent: 'space-between',
    width: '100%',
    // border: "1px solid black",
    height: '70px',
  };
  const mainTotalTrade = {
    display: 'flex',
    flexDirection: 'column',
    // alignItems:'center',
    justifyContent: 'space-between',
    // minWidth: "155px",
    margin: '0 5px',
    // border: "1px solid red",
    width: '100%',
  };
  const totalTradeDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };
  const winRateDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };
  const trade = {
    color: `${lightTheme.textColor}`,
    fontSize: '14px',
    fontWeight: '500',
  };
  const tradeValue = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: "14px",
    fontWeight: "600",
  };

  const mainStatDiv = {
    display: 'flex',
    // flexDirection: "row",
    justifyContent: "space-between",
    columnGap: "30px",
    width: "100%",
    margin: "25px 0",
  };
  const graphDiv = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: '8px',
    padding: '10px 10px',
    // flexDirection:'column',
    maxHeight: '230px',
    width: '100%',
    // flex: "0 1 70%",
    //   border: "1px solid red",
    marginBottom: '10px',
  };
  const graphMain = {
      width:'75%',
    flex: "0 1 75%",
  };
  const calendarDiv = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: '8px',
    padding: '5px 5px',
    height: '100%',
    width: '25%',
    flex: '0 1 25%',
  };

  return (
    <div>
      <Box sx={mainDiv}>
        <NavBar name={'Daily Stats'} />
        <div style={mainStatDiv}>
          {/* detail Div */}

          <div style={graphMain}>
            {[1, 2, 3].map((item, index) => {
              return (
                <div style={graphDiv} key={index}>
                  <div style={mainDivStyle}>
                    <div style={DateAndPLDiv}>
                      <RiArrowDropRightLine size={20} />
                      <p style={DateStyle}>Tue,Aug 23,2022</p>
                      <Divider orientation="vertical" flexItem />
                      <p style={NetPLStyle}>Net P&L $1,234.43</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={EditNoteDiv}>
                        <MdOutlineNoteAdd />
                        <p style={EditNote}>Edit Note</p>
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <p style={{ marginLeft: '10px' }}>Icon</p>
                    </div>
                  </div>
                  <div style={mainChartDiv}>
                    {/* chart */}
                    <div>
                      <Chart options={areaChart.options} series={areaChart.series} type="area" height={150} />
                    </div>
                    <div style={mainTradeDiv}>
                      <div style={mainTotalTrade}>
                        <div style={totalTradeDiv}>
                          <p style={trade}>Total Trades</p>
                          <p style={tradeValue}>1</p>
                        </div>
                        <div style={winRateDiv}>
                          <p style={trade}>WinRate</p>
                          <p style={tradeValue}>100%.0</p>
                        </div>
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div style={mainTotalTrade}>
                        <div style={totalTradeDiv}>
                          <p style={trade}>Winners</p>
                          <p style={tradeValue}>1</p>
                        </div>
                        <div style={winRateDiv}>
                          <p style={trade}>Losers</p>
                          <p style={tradeValue}>0</p>
                        </div>
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div style={mainTotalTrade}>
                        <div style={totalTradeDiv}>
                          <p style={trade}>Gross P&L</p>
                          <p style={tradeValue}> $1,653.0</p>
                        </div>
                        <div style={winRateDiv}>
                          <p style={trade}>Volume</p>
                          <p style={tradeValue}> 10</p>
                        </div>
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div style={mainTotalTrade}>
                        <div style={totalTradeDiv}>
                          <p style={trade}>Commision</p>
                          <p style={tradeValue}>$7.4</p>
                        </div>
                        <div style={winRateDiv}>
                          <p style={trade}>Profit Factor</p>
                          <p style={tradeValue}>--</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calendar Div */}
          <div style={calendarDiv}>
            <DailyCalendar />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default DailyStats;
