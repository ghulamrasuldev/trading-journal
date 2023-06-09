import React, { useState } from 'react';
import { Box, Divider, Grid, TextField } from '@mui/material';
// import { lightTheme } from '../../../Theme/theme';
import { MdOutlineLock } from 'react-icons/md';
import DaysAndTimes from './DaysAndTimes/DaysAndTimes';
import PriceVolume from './PriceVolume/PriceVolume';
import CompareAggregate from './AggregatePL/CompareAggregate';
import PerTradeAverage from './PerTradeAverage/PerTradeAverage.jsx';
import Instrument from './Instrument/Instrument.jsx';
import WinLossExpectation from './WinLossExpectation/WinLossExpectation';
import Liquidity from './Liquidity/Liquidity';
import MarketBehaviour from './Marketbehaviour/MarketBehaviour'
import ModeChange from '../../../Theme/ChangeMode';

const Compare = () => {
  const lightTheme = ModeChange();
  const [showLock, setShowLock] = useState(true);
  const [applyFllter, setApplyFilter] = useState('0');
  const [AggregateToggle, setAggregateToggle] = useState('0');
  const [showComponent, setShowComponent] = useState('0');

  //  total gain loss Data
  const TotalGainLossData = [
    {
      name: 'Total gain/loss:',
      value: '$-4578.54',
    },
    {
      name: 'Average daily gain/loss:',
      value: '$3578.54',
    },
    {
      name: 'Average daily volume',
      value: '4',
    },
    {
      name: 'Average winning trade:',
      value: '$665.00',
    },
    {
      name: 'Average losing trade:',
      value: '$-989.00',
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
    {
      name: 'Number of losing trades:',
      value: '12 (46.0%)',
    },
    {
      name: 'Max consecutive wins:',
      value: '12 (46.0%)',
    },
    {
      name: 'Average position MFE:',
      value: '4(show)',
    },
    {
      name: 'Total Commissions:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
    {
      name: 'Number of winning trades:',
      value: '$-4578.54',
      lock: './lockIcon.png',
    },
  ];

  // styling
  const mainDiv = {
    padding: '25px 15px',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,

    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  const gridItem = {
    marginTop: '30px',
    border: `1px solid ${lightTheme.borderColor}`,
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: '8px',
  };
  const silverGold = {
    fontSize: '18px',
    fontWeight: '500',
    color: `${lightTheme.textColor}`,
    textAlign: 'center',
    padding: '5px 0',
  };
  const plMain = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px 20px',
  };
  const plType = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: '500',
    fontSize: '14px',
  };
  const selected = {
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
  };
  const notSelected = { background: 'none', color: `${lightTheme.textColor}` };
  return (
    <div>
      <Box sx={mainDiv}>
        <p style={silverGold}>
          These reports are only available for silver and gold users.
          <span style={{ color: `${lightTheme.headingTextColor}` }}>Upgrade now!</span>
        </p>
        {/* P & L type filters button */}
        <div style={plMain}>
          <p style={plType}>P&L Type :</p>
          <div
            className="plBtnDiv"
            style={{
              backgroundColor: `${lightTheme.performanceBTnDiv}`,
            }}
          >
            <button
              className="left-roundedPLType"
              style={applyFllter == '0' ? selected : notSelected}
              onClick={() => setApplyFilter('0')}
            >
              $
            </button>
            <button
              className="plBtn"
              style={applyFllter == '1' ? selected : notSelected}
              onClick={() => setApplyFilter('1')}
            >
              T
            </button>
            <button
              className="right-roundedPLType"
              style={applyFllter == '2' ? selected : notSelected}
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
        {/* Aggregare and per-trade filters button */}
        <div className="winlossMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
          <div className="winlossBtns">
            <div
              style={{
                backgroundColor: `${lightTheme.performanceBTnDiv}`,
              }}
              className="winlossBTnDiv"
            >
              <button
                className="left-rounded"
                style={showComponent == '0' ? selected : notSelected}
                onClick={() => setShowComponent('0')}
              >
                Aggregate P&L
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '1' ? selected : notSelected}
                onClick={() => setShowComponent('1')}
              >
                Per-Trade Average
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '2' ? selected : notSelected}
                onClick={() => setShowComponent('2')}
              >
                Days/Times
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '3' ? selected : notSelected}
                onClick={() => setShowComponent('3')}
              >
                Price/Volume
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '4' ? selected : notSelected}
                onClick={() => setShowComponent('4')}
              >
                Instrument
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '5' ? selected : notSelected}
                onClick={() => setShowComponent('5')}
              >
                Market Behaviour
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '6' ? selected : notSelected}
                onClick={() => setShowComponent('6')}
              >
                Wins/Loss/Expectation
              </button>
              <button
                className="right-rounded"
                style={showComponent == '7' ? selected : notSelected}
                onClick={() => setShowComponent('7')}
              >
                Liquidity
              </button>
            </div>
          </div>
        </div>
        <div>
          {showComponent == '0' ? <CompareAggregate /> : null}
          {showComponent == '1' ? <PerTradeAverage /> : null}
          {showComponent == '2' ? <DaysAndTimes /> : null}
          {showComponent == '3' ? <PriceVolume /> : null}
          {showComponent == '4' ? <Instrument /> : null}
          {showComponent == '5' ? <MarketBehaviour /> : null}
          {showComponent == '6' ? <WinLossExpectation /> : null}
          {showComponent == '7' ? <Liquidity /> : null}
        </div>
      </Box>
    </div>
  );
};

export default Compare;
