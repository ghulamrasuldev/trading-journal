import React from 'react';
import ModeChange from '../../Theme/ChangeMode';
// import { lightTheme } from '../../Theme/theme';
const InputFieldDoubleButtons = ({
  placeholder = '',
  showLeftButton,
  showRightButton,
  writable,
  leftButtonTitle = '',
  rightButtonTitle = '',
}) => {
  const lightTheme = ModeChange()
  const buttonStyle={
    textTransform: 'none',
    borderRadius: '0px',
    padding: '5px 10px',
    background: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.headingTextColor}`,
    cursor: 'pointer',
    border: 'none',
  }
  const inputOne={
    width: '100%',
    padding: '8px 10px 8px 10px',
    borderRadius: '0px',
    border: `1px solid ${lightTheme.selectBorderColor}`,
    outline: 'none',
    color: `${lightTheme.textColor}`,
    background:`${lightTheme.ComponentBackgroundColor}`
  }
  return (
    <div
      style={{
        display: 'flex',
        margin: '10px 0px 10px 0px',
      }}
    >
      {showLeftButton && (
        <button
          style={buttonStyle}
        >
          {leftButtonTitle}
        </button>
      )}
      <input
        type="text"
        placeholder={placeholder}
        disabled={writable === false ? true : false}
        style={inputOne}
      ></input>
      {showRightButton && (
        <button
          style={buttonStyle}
        >
          {rightButtonTitle}
        </button>
      )}
    </div>
  );
};

export default InputFieldDoubleButtons;
