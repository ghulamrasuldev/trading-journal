import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { lightTheme } from "../../Theme/theme";
import "../Journal/journal.css";
import TradeSetting from "./TradeSetting/TradeSetting";

const JournalComponent = () => {
  const [showComponent, setShowComponent] = useState("0");

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
  padding: '0 30px',
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
      </div>
      <div style={sideBarContentStyle}>
        <div style={{ padding: '20px', width: '70%' }}>
          {showComponent == '0' ? <TradeSetting /> : null}
        </div>
      </div>
    </div>
  </Box>
);
};

export default JournalComponent;
