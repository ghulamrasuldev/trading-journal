import React, { useState } from 'react';
import { Box } from '@mui/material';
// import { lightTheme } from '../../Theme/theme';
import '../Journal/journal.css';
import PrivacyAndPublicProfile from './PrivacyAndPublicProfile/PrivacyAndPublicProfile';
import TradeSetting from './TradeSetting/TradeSetting';
import Portfolio from './Portfolio/Portfolio';
import Commission from './Commision/Commission';
import ModeChange from '../../Theme/ChangeMode';

const JournalComponent = ({ setNavbarTitle }) => {
  const lightTheme=ModeChange()
  const [showComponent, setShowComponent] = useState('0');

  // styling
  const mainDiv = {
    marginTop: '25px',
    borderRadius: '8px',
    // background:`${lightTheme.lightPageBackground}`
  };
  const sideBarStyle = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    padding: '15px 15px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    width: '250px',
    flex: '0 1 30%',
    maxHeight: '550px',
  };
  const sideBarContentStyle = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    // padding: '30px 30px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    flex: '0 1 70%',
  };
  const mainJournalCom={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: '30px',
    // backgroundColor:`${lightTheme.lightPageBackground}`
  }
  const selected={
    color: `${lightTheme.textColor}`,
    background: `${lightTheme.PageBackgroundColor}`,
  }

  const notSelected={ color: `${lightTheme.textColor}`, background: 'none' }
  return (
    <Box sx={mainDiv}>
      <div
        style={mainJournalCom}
      >
        <div style={sideBarStyle}>
          <button
            className="JournalBtn"
            style={
              showComponent == '0'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('0');
              setNavbarTitle('Trade Setting');
            }}
          >
            Trade Setting
          </button>
          <button
            className="JournalBtn"
            style={
              showComponent == '1'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('1');
              setNavbarTitle('Privacy & Public Profile');
            }}
          >
            Privacy & Public Profile
          </button>
          <button
            className="JournalBtn"
            style={
              showComponent == '2'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('2');
              setNavbarTitle('Portfolio');
            }}
          >
            Portfolio
          </button>
          <button
            className="JournalBtn"
            style={
              showComponent == '3'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('3');
              setNavbarTitle('Commissions');
            }}
          >
            Commissions
          </button>
          <button
            className="JournalBtn"
            style={
              showComponent == '4'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('4');
              setNavbarTitle('Fees');
            }}
          >
            Fees
          </button>
          <button
            className="JournalBtn"
            style={
              showComponent == '5'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('5');
              setNavbarTitle('Chart Settings');
            }}
          >
            Chart Settings
          </button>
          <button
            className="JournalBtn"
            style={
              showComponent == '6'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('6');
              setNavbarTitle('Custom Spread');
            }}
          >
            Custom Spread
          </button>
          <button
            className="JournalBtn"
            style={
              showComponent == '7'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('7');
              setNavbarTitle('Trades Widgets');
            }}
          >
            Trades Widgets
          </button>
          <button
            className="JournalBtn"
            style={
              showComponent == '8'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('8');
              setNavbarTitle('Market Replay Settings');
            }}
          >
            Market Replay Settings
          </button>
          <button
            className="JournalBtn"
            style={
              showComponent == '9'
                ? selected
                : notSelected
            }
            onClick={() => {
              setShowComponent('9');
              setNavbarTitle('Theme');
            }}
          >
            Theme
          </button>
        </div>
        <div style={sideBarContentStyle}>
          <div style={{ padding: '20px', width: '70%' }}>
            {showComponent == '0' ? <TradeSetting /> : null}
            {showComponent == '1' ? <PrivacyAndPublicProfile /> : null}
          </div>
          <div>{showComponent == '2' ? <Portfolio /> : null}</div>
          <div>{showComponent == '3' ? <Commission /> : null}</div>
        </div>
      </div>
    </Box>
  );
};

export default JournalComponent;
