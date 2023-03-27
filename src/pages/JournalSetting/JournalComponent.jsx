import React, { useState } from 'react';
import { Box } from '@mui/material';
import { lightTheme } from '../../Theme/theme';
import '../Journal/journal.css';
import PrivacyAndPublicProfile from './PrivacyAndPublicProfile/PrivacyAndPublicProfile';
const JournalComponent = ({ setNavbarTitle }) => {
  const [showComponent, setShowComponent] = useState('0');

  // styling
  const mainDiv = {
    marginTop: '25px',
    borderRadius: '8px',
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
    padding: '30px 30px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    flex: '0 1 70%',
  };

  return (
    <Box sx={mainDiv}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          columnGap: '30px',
        }}
      >
        <div style={sideBarStyle}>
          <button
            className="JournalBtn"
            style={
              showComponent == '0'
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
                ? {
                    color: `${lightTheme.textColor}`,
                    background: `${lightTheme.PageBackgroundColor}`,
                  }
                : { color: `${lightTheme.textColor}`, background: 'none' }
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
            {showComponent == '1' ? <PrivacyAndPublicProfile /> : null}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default JournalComponent;
