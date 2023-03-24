import { Box, Grid, Divider } from '@mui/material';
import React, { useState } from 'react';
import { lightTheme } from '../../../../Theme/theme';
import { MdOutlineLock } from 'react-icons/md';

const WinLossAggregatePL = () => {
  const [applyFllter, setApplyFilter] = useState('0');
  const [showLock, setShowLock] = useState(true);

  const TotalGainLossData = [
    {
      name: 'Total gain/loss:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Average daily gain/loss:',
      value: '$3578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Average daily volume',
      value: '4',
      lock: './lockIcon.png',
    },
    {
      name: 'Average per-share gain-loss:',
      value: '$665.00',
      lock: './lockIcon.png',
    },
    {
      name: 'Average trade gain/loss:',
      value: '$-989.00',
      lock: './lockIcon.png',
    },
    {
      name: 'Total number of trades:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Winning trades:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Losing trades:',
      value: '12 (46.0%)',
      lock: './lockIcon.png',
    },
    {
      name: 'Average winning trade:',
      value: '12 (46.0%)',
      lock: './lockIcon.png',
    },
    {
      name: 'Average losing trade:',
      value: '4(show)',
      lock: './lockIcon.png',
    },
    {
      name: 'Trade P&L standard deviation:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Probability of random chance:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'K-Ratio:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'System Quality Number (SQN):',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Kelly percentage:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Average hold time (winning trades):',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Average hold time (losing trades):',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Profit factor:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Largest gain:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Average position MFE:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Average position MFE:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Total commissions:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Total fess:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
  ];

  // styling
  const mainDiv = {
    // padding: "30px 25px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };
  const gridItem = {
    border: `1px solid ${lightTheme.borderColor}`,
    borderRadius: '8px',
  };

  return (
    <div>
      <Box sx={mainDiv}>
        <p
          style={{
            color: `${lightTheme.textColor}`,
            fontSize: '18px',
            fontWeight: '500',
            padding: '5px 15px',
          }}
        >
          Note: this report displays data for intraday trades only, regardless of 'duration' filter setting above.
        </p>
        {/* P & L type filters */}
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
              className="left-roundedPLType"
              style={
                applyFllter == '0'
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
                applyFllter == '1'
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
              className="right-roundedPLType"
              style={
                applyFllter == '2'
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
                style={applyFllter == '2' ? { color: `${lightTheme.whiteText}` } : { color: `${lightTheme.textColor}` }}
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
        {/* winning days and losing days */}
        <div style={{ padding: '5px 15px', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p
              style={{
                backgroundColor: `${lightTheme.profit}`,
                height: '25px',
                width: '25px',
                borderRadius: '50%',
              }}
            ></p>
            <p
              style={{
                color: `${lightTheme.profit}`,
                fontWeight: '500',
                fontSize: '16px',
                padding: '0 5px',
              }}
            >
              Winning Days
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}>
            <p
              style={{
                backgroundColor: `${lightTheme.loss}`,
                height: '25px',
                width: '25px',
                borderRadius: '50%',
              }}
            ></p>
            <p
              style={{
                color: `${lightTheme.loss}`,
                fontWeight: '500',
                fontSize: '16px',
                padding: '0 5px',
              }}
            >
              Losing Days
            </p>
          </div>
        </div>
        <div style={{ padding: '30px 15px' }}>
          <Grid container columnGap={4} rowGap={4}>
            <Grid lg={5.5} md={12} sm={12} sx={gridItem}>
              <div
                style={{
                  borderRadius: '8px',
                }}
              >
                <div
                  style={{
                    backgroundColor: `${lightTheme.darkGreencolorGraph}`,
                    padding: '15px 15px',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: `${lightTheme.whiteText}`,
                    }}
                  >
                    Statistics-Winning Days
                  </p>
                </div>
                <Divider />
                {TotalGainLossData.map((data, index) => {
                  return (
                    <>
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
                          {showLock ? <img src={data.lock} alt="lockIcon" height={20} /> : `${data.value}`}
                        </p>
                      </div>
                      <Divider />
                    </>
                  );
                })}
              </div>
            </Grid>
            <Grid lg={5.5} md={12} sm={12} sx={gridItem}>
              <div
                style={{
                  borderRadius: '8px',
                }}
              >
                <div
                  style={{
                    backgroundColor: `${lightTheme.darkRedcolorGraph}`,
                    padding: '15px 15px',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: `${lightTheme.whiteText}`,
                    }}
                  >
                    Statistics-Losing Days
                  </p>
                </div>
                <Divider />
                {TotalGainLossData.map((data, index) => {
                  return (
                    <>
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
                          {showLock ? <img src={data.lock} alt="lockIcon" height={20} /> : `${data.value}`}
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

export default WinLossAggregatePL;
