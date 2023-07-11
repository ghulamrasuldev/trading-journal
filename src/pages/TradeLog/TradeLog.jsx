import React from 'react';
import './TradeLog.css';
import { Box } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import TradeLogTopGraphs from './TradeLogTopGraphs/TradeLogTopGraphs';
import TradeReport from './TradesReport/TradeReport';
import ModeChange from '../../Theme/ChangeMode';

// import { lightTheme } from '../../Theme/theme';

const TradeLog = () => {
  const lightTheme = ModeChange();


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
