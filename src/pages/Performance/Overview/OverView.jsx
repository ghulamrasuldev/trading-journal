import { Box, Divider, Grid } from '@mui/material';
import React, { useState } from 'react';
import './Overview.css';
import downArrow from '../../../assets/downArrow.png';
import { lightTheme } from '../../../Theme/theme';
import DailyGraph from './DailyGraphs/DailyGraph';
import DailyVolumegraph from './DailyGraphs/DailyVolumegraph';
import { TotalProfitLossData } from './ConstantData';
import { AverageTradeProfitLoss } from './ConstantData';

const OverView = () => {
  const [TotalProfit, setTotalProfitLossData] = useState(TotalProfitLossData);
  const [AverageTradeProfit, setAverageTradeProfitLoss] = useState(AverageTradeProfitLoss);
  // styling
  const mainDiv = {
    padding: '15px 20px',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };
  const month = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: '20px',
    fontWeight: '500',
  };
  const monthVal = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: '18px',
    fontWeight: '500',
  };
  const dateStyle = { color: `${lightTheme.dateColor}`, fontSize: '12px' };
  const profitLossMain = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 15px',
  };
  const name = {
    fontWeight: '500',
    fontSize: '16px',
    color: `${lightTheme.headingTextColor}`,
  };
  const nameVal = {
    fontWeight: '400',
    fontSize: '16px',
    color: `${lightTheme.textColor}`,
  };
  return (
    <div>
      <Box sx={mainDiv}>
        <div className="overViewMain">
          <p style={{ color: `${lightTheme.profit}` }}>P&L Showing</p>
          <div className="insideOverViewMain">
            <p style={{ color: `${lightTheme.textColor}`, paddingRight: '10px' }}>NET P&L</p>
            <img src={downArrow} alt="downArrow" height={5} />
          </div>
        </div>
        <div style={{ padding: '10px 0' }}>
          <p
            style={{
              color: `${lightTheme.headingTextColor}`,
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            Your Starts
          </p>
          <p style={dateStyle}>(FROM MAY 10,2022 TO MAY 11, 2022)</p>
          <Grid container my={3} rowGap={4}>
            <Grid item lg={3} md={6} sm={12}>
              <p style={month}>Best Month</p>
              <p style={monthVal}>$7,00.00</p>
              <p style={dateStyle}>In May 2022</p>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <p style={month}>Lowest Month</p>
              <p style={monthVal}>$7,00.00</p>
              <p style={dateStyle}>In May 2022</p>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <p style={month}>Average</p>
              <p style={monthVal}>$7,00.00</p>
              <p style={dateStyle}>In May 2022</p>
            </Grid>
          </Grid>
        </div>
        <Grid container columnGap={6} rowGap={4}>
          <Grid item lg={5.5} md={12} sm={12}>
            <div
              style={{
                border: `1px solid ${lightTheme.borderColor}`,
                borderRadius: '8px',
              }}
            >
              {TotalProfit.map((data, index) => {
                return (
                  <>
                    <div key={index} style={profitLossMain}>
                      <p style={name}>{data.name}</p>
                      <p style={nameVal}>{data.value}</p>
                    </div>
                    <Divider />
                  </>
                );
              })}
            </div>
          </Grid>
          <Grid item lg={5.5} md={12} sm={12}>
            <div
              style={{
                border: `1px solid ${lightTheme.borderColor}`,
                borderRadius: '8px',
              }}
            >
              {AverageTradeProfit.map((data, index) => {
                return (
                  <>
                    <div key={index} style={profitLossMain}>
                      <p style={name}>{data.name}</p>
                      <p style={nameVal}>{data.value}</p>
                    </div>
                    <Divider />
                  </>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Box>
      <DailyGraph />
      <DailyVolumegraph />
    </div>
  );
};

export default OverView;
