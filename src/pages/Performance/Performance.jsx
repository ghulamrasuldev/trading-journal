import React, { useState } from 'react';
import './Performance.css';
import { Box } from '@mui/material';
import { lightTheme } from '../../Theme/theme';
import NavBar from '../../components/NavBar/NavBar';
import Overview from './Overview/OverView';
// import Compare from './Compare/DaysAndTimes/DaysAndTimes'
import Detail from './Details/Detail';
import TradeLogTopGraph from '../TradeLog/TradeLogTopGraphs/TradeLogTopGraphs';
import Compare from './Compare/Compare';
import Drawdown from './DrawDown/Drawdown';

const Performance = () => {
  const [showComponent, setShowComponent] = useState('0');

  // styling
  const mainDiv = {
    padding: '30px 25px',
    backgroundColor: `${lightTheme.PageBackgroundColor}`,
  };
  return (
    <div>
      <Box sx={mainDiv}>
        <NavBar name={'Performance'} />
        <TradeLogTopGraph />
        <div className="performanceMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
          <div className="ReportBtns">
            <p>Reports</p>
            <div
              style={{ backgroundColor: `${lightTheme.performanceButtonsBackground}` }}
              className="performanceBTnDiv"
            >
              <button
                className="performanceBtn"
                style={
                  showComponent == '0'
                    ? { backgroundColor: `${lightTheme.headingTextColor}`, color: `${lightTheme.whiteText}` }
                    : { background: 'none', color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent('0')}
              >
                Overview
              </button>
              <button
                className="performanceBtn"
                style={
                  showComponent == '1'
                    ? { backgroundColor: `${lightTheme.headingTextColor}`, color: `${lightTheme.whiteText}` }
                    : { background: 'none', color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent('1')}
              >
                Detailed
              </button>
              <button
                className="performanceBtn"
                style={
                  showComponent == '2'
                    ? { backgroundColor: `${lightTheme.headingTextColor}`, color: `${lightTheme.whiteText}` }
                    : { background: 'none', color: `${lightTheme.textColor}` }
                }
              >
                Options
              </button>
              <button
                className="performanceBtn"
                style={
                  showComponent == '3'
                    ? { backgroundColor: `${lightTheme.headingTextColor}`, color: `${lightTheme.whiteText}` }
                    : { background: 'none', color: `${lightTheme.textColor}` }
                }
              >
                Risk
              </button>
              <button
                className="performanceBtn"
                style={
                  showComponent == '4'
                    ? { backgroundColor: `${lightTheme.headingTextColor}`, color: `${lightTheme.whiteText}` }
                    : { background: 'none', color: `${lightTheme.textColor}` }
                }
              >
                Wins VS Losses
              </button>
              <button
                className="performanceBtn"
                style={
                  showComponent == '5'
                    ? { backgroundColor: `${lightTheme.headingTextColor}`, color: `${lightTheme.whiteText}` }
                    : { background: 'none', color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent('5')}
              >
                Compare
              </button>
              <button
                className="performanceBtn"
                style={
                  showComponent == '6'
                    ? { backgroundColor: `${lightTheme.headingTextColor}`, color: `${lightTheme.whiteText}` }
                    : { background: 'none', color: `${lightTheme.textColor}` }
                }
              >
                Market Behavior
              </button>
              <button
                className="performanceBtn"
                style={
                  showComponent == '7'
                    ? { backgroundColor: `${lightTheme.headingTextColor}`, color: `${lightTheme.whiteText}` }
                    : { background: 'none', color: `${lightTheme.textColor}` }
                }
              >
                Calendar
              </button>
              <button
                className="performanceBtn"
                style={
                  showComponent == '8'
                    ? { backgroundColor: `${lightTheme.headingTextColor}`, color: `${lightTheme.whiteText}` }
                    : { background: 'none', color: `${lightTheme.textColor}` }
                }
                onClick={() => setShowComponent('8')}
              >
                Drawdown
              </button>
            </div>
          </div>
        </div>
        <div>
          {showComponent == '0' ? <Overview /> : null}
          {showComponent == '1' ? <Detail /> : null}
          {showComponent == '5' ? <Compare /> : null}
          {showComponent == '8' ? <Drawdown /> : null}
          {/* {
                showComponent=1?  <Compare/>:null
              } */}
        </div>
      </Box>
    </div>
  );
};

export default Performance;
