import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import './Drawdown.css';
import { lightTheme } from '../../../Theme/theme';
import { MdOutlineLock } from 'react-icons/md';
import Chart from 'react-apexcharts';

const Drawdown = () => {
  const [applyFilter, setApplyFilter] = useState('0');
  const [showLock, setShowLock] = useState(true);
  const [drawDownIncreaseDistributionGraph, setDrawDownIncreaseDistribution] = useState({
    series: [
      {
        data: [20, 90, 50, 30, , , , 5],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 100,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#FF696D', '#5D45DB', '#6CB9AD', '#5D45DB', '#5D45DB', '#5D45DB', '#5D45DB', '#EDC161'],
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
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [PerformanceByWeakGraph, setPerformanceByWeakGraph] = useState({
    series: [
      {
        data: [10, 90, 50, 30, -5, , 20],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 250,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#6CB9AD', '#EDC161', '#6CB9AD', '#689BE2', '#FF696D', '#5D45DB', '#EDC161'],
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
          labels: {
            formatter: function (x) {
              return '$' + x.toFixed(0);
            },
          },
        },
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });
  const [pLVolatilityGraph, setPLVolatilityGraph] = useState({
    series: [
      {
        data: [10, 90, 50, 30, -5, , 20],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 250,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
        },
      },

      fill: {
        colors: ['#6CB9AD', '#EDC161', '#6CB9AD', '#689BE2', '#FF696D', '#5D45DB', '#EDC161'],
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
          labels: {
            formatter: function (x) {
              return '$' + x.toFixed(0);
            },
          },
        },
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        labels: {
          formatter: function (x) {
            return '$' + x.toFixed(0);
          },
        },
      },

      yaxis: {
        tickAmount: 3,
      },
    },
  });

  const TotalGainLossData = [
    {
      name: 'Kelly percentage:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Total number of trades:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Total Commissions:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Kelly percentage:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Total number of trades:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
  ];

  // styling
  const mainDiv = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };
  const gridItem = {
    border: `1px solid ${lightTheme.borderColor}`,
    borderRadius: '8px',
    padding: '10px 10px',
  };
  const gridStyle = {
    border: `1px  solid ${lightTheme.borderColor}`,
  };
  return (
    <div>
      <Box sx={mainDiv}>
        <div>
          <p
            style={{
              color: `${lightTheme.textColor}`,
              fontSize: '16px',
              textAlign: 'center',
            }}
          >
            These reports are only available for silver and gold users.{' '}
            <span
              style={{
                color: `${lightTheme.headingTextColor}`,
                fontWeight: '500',
                fontSize: '18px',
                textAlign: 'center',
              }}
            >
              Upgrade now!
            </span>
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '10px 20px',
          }}
        >
          <p
            style={{
              color: `${lightTheme.headingTextColor}`,
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
            P&L Type :
          </p>
          <div
            className="plBtnDiv"
            style={{
              backgroundColor: `${lightTheme.performanceButtonsBackground}`,
            }}
          >
            <button
              className="plBtn"
              style={
                applyFilter == '0'
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                      color: `${lightTheme.whiteText}`,
                    }
                  : { background: 'none', color: `${lightTheme.textColor}` }
              }
              onClick={() => setApplyFilter('0')}
            >
              $
            </button>
            <button
              className="plBtn"
              style={
                applyFilter == '1'
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                      color: `${lightTheme.whiteText}`,
                    }
                  : { background: 'none', color: `${lightTheme.textColor}` }
              }
              onClick={() => setApplyFilter('1')}
            >
              T
            </button>
            <button
              className="plBtn"
              style={
                applyFilter == '2'
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                      color: `${lightTheme.whiteText}`,
                    }
                  : { background: 'none', color: `${lightTheme.textColor}` }
              }
              onClick={() => setApplyFilter('2')}
            >
              R{' '}
              <MdOutlineLock
                color="red"
                size={10}
                style={applyFilter == '2' ? { color: `${lightTheme.whiteText}` } : { color: `${lightTheme.textColor}` }}
              />
            </button>
          </div>
          <a
            href="#"
            style={{
              color: `${lightTheme.linkColor}`,
              textDecoration: 'underline',
            }}
          >
            Help
          </a>
        </div>
        <div style={{ padding: '15px 15px' }}>
          <p
            style={{
              color: `${lightTheme.headingTextColor}`,
              fontWeight: '500',
              fontSize: '20px',
              marginTop: '2em',
              marginBottom: '2em',
            }}
          >
            Statistics
          </p>
          <Grid container spacing={2}>
            {TotalGainLossData.map((data, index) => {
              return (
                <Grid item lg={6} style={{ paddingTop: '0px' }}>
                  <div
                    style={{
                      border: '1px solid RGBA(101, 120, 99,0.1)',
                      borderRadius: '5px',
                    }}
                  >
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '15px 15px',
                      }}
                    >
                      <p
                        style={{
                          fontWeight: '500',
                          fontSize: '16px',
                          color: `${lightTheme.headingTextColor}`,
                        }}
                      >
                        {data.name}
                      </p>
                      <p
                        style={{
                          fontWeight: '400',
                          fontSize: '16px',
                          color: `${lightTheme.textColor}`,
                        }}
                      >
                        {(data.name == 'Kelly percentage:' && showLock === true) ||
                        (data.name == 'Total number of trades:' && showLock === true) ||
                        (data.name == 'Total Commissions:' && showLock === true) ? (
                          <img src={data.lock} alt="lockIcon" height={20} />
                        ) : (
                          `${data.value}`
                        )}
                      </p>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div style={{ padding: '15px 15px' }}>
          <Grid
            container
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Grid
              zeroMinWidth
              item
              lg={5.5}
              md={12}
              sm={12}
              style={{
                border: '1px solid RGBA(101, 120, 99,0.1)',
                borderRadius: '5px',
                paddingLeft: '15px',
                marginTop: '2em',
              }}
            >
              <p
                style={{
                  color: `${lightTheme.headingTextColor}`,
                  fontWeight: '500',
                  fontSize: '16px',
                  marginTop: '10px',
                }}
              >
                Drawdown Increase Distribution By Day of Week
              </p>
              <Chart
                options={drawDownIncreaseDistributionGraph.options}
                series={drawDownIncreaseDistributionGraph.series}
                type="bar"
                height={300}
              />
            </Grid>
            <Grid
              zeroMinWidth
              item
              lg={5.5}
              md={12}
              sm={12}
              style={{
                border: '1px solid RGBA(101, 120, 99,0.1)',
                borderRadius: '5px',
                paddingLeft: '15px',
                marginTop: '2em',
              }}
            >
              <p
                style={{
                  color: `${lightTheme.headingTextColor}`,
                  fontWeight: '500',
                  fontSize: '16px',
                  marginTop: '10px',
                }}
              >
                Performance By The Day Of Week
              </p>
              <Chart
                options={PerformanceByWeakGraph.options}
                series={PerformanceByWeakGraph.series}
                type="bar"
                height={300}
              />
            </Grid>
            <Grid
              zeroMinWidth
              item
              lg={5.5}
              md={12}
              sm={12}
              style={{
                border: '1px solid RGBA(101, 120, 99,0.1)',
                borderRadius: '5px',
                paddingLeft: '15px',
                marginTop: '2em',
              }}
            >
              <p
                style={{
                  color: `${lightTheme.headingTextColor}`,
                  fontWeight: '500',
                  fontSize: '16px',
                  marginTop: '10px',
                }}
              >
                P&L Volatility
              </p>
              <Chart options={pLVolatilityGraph.options} series={pLVolatilityGraph.series} type="bar" height={300} />
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default Drawdown;
