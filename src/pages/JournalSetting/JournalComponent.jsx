import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { lightTheme } from '../../Theme/theme';
import '../Journal/journal.css';
import PrivacyAndPublicProfile from './PrivacyAndPublicProfile/PrivacyAndPublicProfile';
const JournalComponent = () => {
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
  };
  const sideBarContentStyle = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    padding: '30px 30px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
  };

  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid item lg={3} md={3} sm={3} sx={sideBarStyle} style={{ height: '550px' }}>
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
              onClick={() => setShowComponent('0')}
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
              onClick={() => setShowComponent('1')}
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
              onClick={() => setShowComponent('2')}
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
              onClick={() => setShowComponent('3')}
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
              onClick={() => setShowComponent('4')}
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
              onClick={() => setShowComponent('5')}
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
              onClick={() => setShowComponent('6')}
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
              onClick={() => setShowComponent('7')}
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
              onClick={() => setShowComponent('8')}
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
              onClick={() => setShowComponent('9')}
            >
              Theme
            </button>
          </Grid>
          <Grid item lg={8.7} sm={8.6} xs={12} style={{ minHeight: '900px' }} sx={sideBarContentStyle}>
            <div style={{ padding: '20px', width: '70%' }}>
              {showComponent == '1' ? <PrivacyAndPublicProfile /> : null}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default JournalComponent;
