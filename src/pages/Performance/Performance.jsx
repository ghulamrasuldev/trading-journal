import React, { useState } from 'react';
import './Performance.css';
import { Box } from '@mui/material';
// import { lightTheme } from '../../Theme/theme';
import NavBar from '../../components/NavBar/NavBar';
import Overview from './Overview/OverView';
// import Compare from './Compare/DaysAndTimes/DaysAndTimes'
import Detail from './Details/Detail';
import TradeLogTopGraph from '../TradeLog/TradeLogTopGraphs/TradeLogTopGraphs';
import Compare from './Compare/Compare';
import WinVSLossDays from './WinVSLossDays/WinVSLossDays';
import Drawdown from './DrawDown/Drawdown';
import TagBreakDown from './TagBreakDown/TagBreakDown';
import ModeChange from '../../Theme/ChangeMode';

const Performance = () => {
  const lightTheme = ModeChange();
  const [showComponent, setShowComponent] = useState('0');

  // styling
  const mainDiv = {
    padding: '30px 25px',
    backgroundColor: `${lightTheme.lightPageBackground}`,
  };
  const selected = {
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
  };
  const notSelected = {
    background: 'none',
    color: `${lightTheme.textColor}`,
  };
  return (
    <div>
      <Box sx={mainDiv}>
        <NavBar name={'Performance'} />
        <TradeLogTopGraph />
        <div className="performanceMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
          <div className="ReportBtns">
            <p style={{color:`${lightTheme.bluegrayColor}`}}>Reports</p>
            <div
              style={{
                backgroundColor: `${lightTheme.performanceBTnDiv}`,
              }}
              className="performanceBTnDiv"
            >
              <button
                className="left-roundedPerformance"
                style={showComponent == '0' ? selected : notSelected}
                onClick={() => setShowComponent('0')}
              >
                Overview
              </button>
              <button
                className="performanceBtn"
                style={showComponent == '1' ? selected : notSelected}
                onClick={() => setShowComponent('1')}
              >
                Detailed
              </button>
              <button className="performanceBtn" style={showComponent == '2' ? selected : notSelected}>
                Options
              </button>
              <button className="performanceBtn" style={showComponent == '3' ? selected : notSelected}>
                Risk
              </button>
              <button
                className="performanceBtn"
                style={showComponent == '4' ? selected : notSelected}
                onClick={() => setShowComponent('4')}
              >
                Wins VS Losses
              </button>
              <button
                className="performanceBtn"
                style={showComponent == '5' ? selected : notSelected}
                onClick={() => setShowComponent('5')}
              >
                Drawdown
              </button>
              <button
                className="performanceBtn"
                style={showComponent == '6' ? selected : notSelected}
                onClick={() => setShowComponent('6')}
              >
                Compare
              </button>
              <button
                className="performanceBtn"
                style={showComponent == '7' ? selected : notSelected}
                onClick={() => setShowComponent('7')}
              >
                Tag BreakDown
              </button>
              <button
                className="right-roundedPLType"
                style={showComponent == '8' ? selected : notSelected}
                onClick={() => setShowComponent('8')}
              >
                Calendar
              </button>
            </div>
          </div>
        </div>
        <div>
          {showComponent == '0' ? <Overview /> : null}
          {showComponent == '1' ? <Detail /> : null}
          {showComponent == '4' ? <WinVSLossDays /> : null}
          {showComponent == '6' ? <Compare /> : null}
          {showComponent == '5' ? <Drawdown /> : null}
          {showComponent == '7' ? <TagBreakDown /> : null}
        </div>
      </Box>
    </div>
  );
};

export default Performance;
