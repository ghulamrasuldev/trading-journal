import React from 'react';
import './TradeLog.css';
import { Box } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import TradeLogTopGraphs from './TradeLogTopGraphs/TradeLogTopGraphs';
import TradeReport from './TradesReport/TradeReport';
import Trade from './Trade/Trade';
import { lightTheme } from '../../Theme/theme';

const TradeLog = () => {
  const TradeLogMain = {
    padding: '30px 25px',
    backgroundColor: `${lightTheme.lightPageBackground}`,
  };

  return (
    <Box sx={TradeLogMain}>
      <NavBar name={'Trade Log'} />
      <TradeLogTopGraphs />
      <TradeReport />
    </Box>
  );
};

export default TradeLog;
