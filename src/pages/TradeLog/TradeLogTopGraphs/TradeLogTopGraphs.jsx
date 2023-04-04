import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Chart from 'react-apexcharts';
import './TradeLogTopGraph.css';

import ModeChange from '../../../Theme/ChangeMode';
// import { lightTheme } from '../../../Theme/theme';

const TradeLogTopGraphs = () => {
  const lightTheme = ModeChange();
  // first top graph
  const [graphData, setGraphData] = useState({
    seriesSpark1: [
      {
        data: [23, 34, 12, 34, 22, 43],
      },
    ],
    optionsSpark1: {
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'straight',
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
        min: 0,
      },
      colors: [`${lightTheme.purpleAreaGraph}`],
    },
  });

  // second top graph
  const [pieChart, setPieChart] = useState({
    series: [50, 50],
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
  });

  // third top graph
  const [NetPLgraphData, setNetPLGraphData] = useState({
    seriesSpark1: [
      {
        data: [23, 34, 12, 34, 22, 43],
      },
    ],
    optionsSpark1: {
      markers: {
        size: 3,
        colors: [`${lightTheme.tradeLogGreenAreaGraph}`],
        strokeColor: `${lightTheme.tradeLogGreenAreaGraph}`,
        // strokeWidth:1
      },
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
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
        min: 0,
      },
      colors: [`${lightTheme.tradeLogGreenAreaGraph}`],
    },
  });

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
                <span style={{ fontWeight: '500', paddingLeft: '5px', color: `${lightTheme.lightDarkBlue}` }}>83</span>
              </p>
            </div>
            <div>
              <p className="profitTopGraph" style={{ color: `${lightTheme.profit}` }}>
                $35,520.80
              </p>
            </div>
          </div>
          <div>
            <Chart options={graphData.optionsSpark1} series={graphData.seriesSpark1} type="area" height={84} />
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
                  879,09
                </p>
              </div>
              <div>
                <p className="loserTradeLog" style={{ color: `${lightTheme.loss}` }}>
                  Losers
                </p>
                <p className="loserValueTradeLog" style={{ color: `${lightTheme.loss}` }}>
                  13,09
                </p>
              </div>
            </div>
            <div className="pieChartTradeLog">
              <Chart options={pieChart.options} series={pieChart.series} type="donut" height={150} />
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
                    83
                  </span>
                </p>
              </div>
              <div>
                <p className="profitTopGraph">
                  <span
                    style={{
                      fontWeight: '700',
                      marginRight: '5px',
                      color: '#022658',
                      fontSize: '10px',
                      color: `${lightTheme.profitloss}`,
                    }}
                  >
                    Profit:
                  </span>
                  $35,520.80
                </p>
                <p className="lossTopGraph">
                  <span
                    style={{
                      fontWeight: '700',
                      marginRight: '5px',
                      color: '#022658',
                      fontSize: '10px',
                      color: `${lightTheme.profitloss}`,
                    }}
                  >
                    Lost:
                  </span>
                  $35,520.80
                </p>
              </div>
            </div>
            <div>
              <Chart
                options={NetPLgraphData.optionsSpark1}
                series={NetPLgraphData.seriesSpark1}
                type="area"
                height={91}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TradeLogTopGraphs;
