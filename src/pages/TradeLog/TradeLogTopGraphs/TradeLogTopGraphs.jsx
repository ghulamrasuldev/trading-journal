import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Chart from 'react-apexcharts';
import './TradeLogTopGraph.css';

import ModeChange from '../../../Theme/ChangeMode';
import axios from 'axios';
import { base_Url } from '../../../Config/Config';
import Loading from '../../../components/common/Loading';
import apiService from '../../../services/api/api';



const TradeLogTopGraphs = () => {
  const lightTheme = ModeChange();
  const [isloading,setIsLoading]=useState(false)
  // first top graph
  const [netAccu, setNetAccu] = useState();
  const [graphData, setGraphData] = useState({
    series: [],
    options:{}
  });

  // second top graph
  const [pieData, setPieData] = useState();
  const [pieChart, setPieChart] = useState({
    series: [],
    options:{}
  });

  // third top graph
  const [dailyPl, setDailyPL] = useState();
  const [NetPLgraphData, setNetPLGraphData] = useState({
    series: [],
    options:{}
  });


  const getPieChartData = async () => {
    setIsLoading(true)
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/dashboard/trade/winloss/percentage/weekly`,
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      setPieData(data);
      let winLossPercentage = [];
      winLossPercentage.push(parseInt(data.weeklyLossPercentage))
      winLossPercentage.push(parseInt(data.weeklyWinPercentage))
      setPieChart({
        series:winLossPercentage,
        options: {
          // dataLabels: {
          //     enabled:false
          //   },
          plotOptions: {
            pie: {
              customScale: 0.9,
              donut: {
                labels: {
                  show: true,
                },
              },
            },
          },
          chart: {
            type: 'donut',
          },
          colors: [`${lightTheme.darkGreencolorGraph}`, `${lightTheme.darkRedcolorGraph}`],
          responsive: [
            {
              //   breakpoint: 480,
              options: {
                chart: {
                  width: 180,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
      })
      setIsLoading(false)
   
    } catch (error) {
      console.log("Error", error)
    }
  }
  const getNetAccumulativeChartData = async () => {
    setIsLoading(true)
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/dashboard/trade/netcumulative/pl/weekly`,
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      setNetAccu(data);
      const dates = Object.keys(data).filter((key) =>
      /\d{2}\/\d{2}\/\d{4}/.test(key)
      );
      const netplValues = dates.map((date) =>
      data[date].updatedNetpl.toFixed(4)
      );
      // netplValues.push(-13)
      setGraphData({
        series: [
          {
            data: netplValues && netplValues,
          },
        ],
        options: {
          tooltip: {
            enabled: true,
            style: {
              fontSize: "12px",
              fontWeight: "bold",
            },

            y: {
              show: true,
              title: {
                formatter: (seriesName) => "Netpl",
              },
              formatter: (value) => `${value}`, // customize the tooltip value format
            },
            fixed: {
              enabled: true,
              position: "top", // Position the tooltip above the graph line
              offsetY: -10, // Adjust the vertical offset to position it precisely
            },
          },
          chart: {
            type: "area",
            height: 160,
            sparkline: {
              enabled: true,
            },
            toolbar: {
              show: false,
            },
          },
          stroke: {
            curve: "straight",
          },
          fill: {
            opacity: 0.3,
          },
          xaxis: {
            crosshairs: {
              width: 1,
            },
          },
          yaxis: {
            // min: 1,
            // labels: false,
            // min: Math.min(...netplValues) - 5,
            labels: {
              show: false,
            },
          },
          grid: {
            // position: 'back',

            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: [`${lightTheme.purpleAreaGraph}`],
          dataLabels: {
            enabled: false,
          },
        },
      })
      setIsLoading(false)
    } catch (error) {
      console.log("Error",error)
    }
  }
  const getNetDailyPLChartData = async () => {
    setIsLoading(true)
    try {
      const authToken = localStorage.getItem("AuthToken");
      const res = await apiService(
        "get",
        `/dashboard/trade/netdaily/pl/weekly`,
        { "x-usertoken": authToken },
        null
      );
      const data = res;
      setDailyPL(data);
      const dates = Object.keys(data).filter((key) =>
      /\d{2}\/\d{2}\/\d{4}/.test(key)
      );
      const netplValues = dates.map((date) =>
      data[date].netpl.toFixed(4)
      );
      // netplValues.push(-13)
      setNetPLGraphData({
        series: [
          {
            data: netplValues && netplValues,
          },
        ],
        options: {
            markers: {
            size: 3,
            colors: [`${lightTheme.tradeLogGreenAreaGraph}`],
            strokeColor: `${lightTheme.tradeLogGreenAreaGraph}`,
            // strokeWidth:1
          },
          tooltip: {
            enabled: true,
            style: {
              fontSize: "12px",
              fontWeight: "bold",
            },

            y: {
              show: true,
              title: {
                formatter: (seriesName) => "Netpl",
              },
              formatter: (value) => `${value}`, // customize the tooltip value format
            },
            fixed: {
              enabled: true,
              position: "top", // Position the tooltip above the graph line
              offsetY: -10, // Adjust the vertical offset to position it precisely
            },
          },
          chart: {
            type: "area",
            height: 160,
            sparkline: {
              enabled: true,
            },
            toolbar: {
              show: false,
            },
          },
          stroke: {
            // curve: "straight",
          },
          fill: {
            opacity: 0.3,
          },
          xaxis: {
            crosshairs: {
              width: 1,
            },
          },
          yaxis: {
            // min: 1,
            // labels: false,
            // min: Math.min(...netplValues) - 5,
            labels: {
              show: false,
            },
          },
          grid: {
            // position: 'back',

            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: [`${lightTheme.tradeLogGreenAreaGraph}`],
          dataLabels: {
            enabled: false,
          },
        },
      })
      setIsLoading(false)
    } catch (error) {
      console.log("Error",error)
    }
  }

  let check = false;
  useEffect(() => {
    if (check === false) {
      check = true;
      getPieChartData();
      getNetAccumulativeChartData();
      getNetDailyPLChartData();
    }
  },[])

  // styling
  const topGraphStyle = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    // border: '1px solid black',
    borderRadius: '8px',
    maxHeight: '160px',
    overflow: 'hidden',
  };
  return (
    <Box>
      <Grid container justifyContent="space-between" alignItems="center" mt={5} mb={5} rowGap={4}>
        <Grid item lg={3.8} md={12} sm={12} xm={12} sx={topGraphStyle}>
          <div className="TradeLogTopSection">
            <div>
              <p className="graphTitle" style={{ color: `${lightTheme.headingTextColor}` }}>
                Net Cumulative PL
              </p>
              <p className="graphSubTitle" style={{ color: `${lightTheme.headingColor}` }}>
                Total Trades:
                <span style={{ fontWeight: '500', paddingLeft: '5px', color: `${lightTheme.lightDarkBlue}` }}>{netAccu && netAccu.weeklyTrades}</span>
              </p>
            </div>
            <div>
              <p className="profitTopGraph" style={netAccu && netAccu.weeklyNetpl>0? { color: `${lightTheme.profit}` }:{ color: `${lightTheme.loss}` }}>
              {netAccu && netAccu.weeklyNetpl.toFixed(4)}
              </p>
            </div>
          </div>
          <div>
            {
              isloading?<Loading/>:
            <Chart options={graphData.options} series={graphData.series} type="area" height={84} />
            }
          </div>
        </Grid>
        <Grid item lg={3.8} md={12} sm={12} xm={12} sx={topGraphStyle}>
          <div className="tradeLogPieChartDiv">
            <div style={{ padding: '20px 10px 20px 20px' }}>
              <p
                style={{
                  fontWeight: '500',
                  fontSize: '15px',
                  marginBottom: '5px',
                  color: `${lightTheme.headingTextColor}`,
                }}
              >
                Win/Loss %
              </p>
              <div>
                <p className="winnerTradeLog" style={{ color: `${lightTheme.profit}` }}>
                  Winers
                </p>
                <p className="winnerValueTradeLog" style={{ color: `${lightTheme.profit}` }}>
                  {pieData&&pieData.weeklyWinNetpl.toFixed(4)}
                </p>
              </div>
              <div>
                <p className="loserTradeLog" style={{ color: `${lightTheme.loss}` }}>
                  Losers
                </p>
                <p className="loserValueTradeLog" style={{ color: `${lightTheme.loss}` }}>
                {pieData&&pieData.weeklyLossNetpl.toFixed(4)}
                </p>
              </div>
            </div>
            <div className="pieChartTradeLog">
            {
              isloading?<Loading/>:
              <Chart options={pieChart.options} series={pieChart.series} type="donut" height={150} />
            }
            </div>
          </div>
        </Grid>
        <Grid item lg={3.8} md={12} sm={12} xm={12} sx={topGraphStyle}>
          <div>
            <div className="TradeLogTopSection">
              <div>
                <p className="graphTitle" style={{ color: `${lightTheme.headingTextColor}` }}>
                  Net Daily P&L
                </p>
                <p className="graphSubTitle" style={{ color: `${lightTheme.headingColor}` }}>
                  Total Trades:
                  <span style={{ fontWeight: '500', paddingLeft: '5px', color: `${lightTheme.lightDarkBlue}` }}>
                  {dailyPl && dailyPl.totalTrade}
                  </span>
                </p>
              </div>
              <div>
                <p className="profitTopGraph">
                  <span
                    style={{
                      fontWeight: '500',
                      marginRight: '5px',
                      fontSize: '14px',
                      color: `${lightTheme.profitloss}`,
                    }}
                  >
                    Profit:
                  </span>
                  {dailyPl && dailyPl.profit.toFixed(4)}
                </p>
                <p className="lossTopGraph">
                  <span
                    style={{
                      fontWeight: '500',
                      marginRight: '5px',
                      fontSize: '14px',
                      color: `${lightTheme.profitloss}`,
                    }}
                  >
                    Lost:
                  </span>
                  {dailyPl && dailyPl.loss.toFixed(4)}
                </p>
              </div>
            </div>
            <div>
            {
              isloading?<Loading/>:
              <Chart
              options={NetPLgraphData.options}
              series={NetPLgraphData.series}
              type="area"
              height={91}
              />
            }
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TradeLogTopGraphs;
