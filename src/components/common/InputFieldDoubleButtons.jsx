import React from 'react';
import { lightTheme } from '../../Theme/theme';
const InputFieldDoubleButtons = ({
  placeholder = '',
  showLeftButton,
  showRightButton,
  writable,
  leftButtonTitle = '',
  rightButtonTitle = '',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '10px 0px 10px 0px',
      }}
    >
      {showLeftButton && (
        <button
          style={{
            textTransform: 'none',
            borderRadius: '0px',
            padding: '5px 10px',
            background: `${lightTheme.lightgrey}`,
            color: `${lightTheme.headingTextColor}`,
            cursor: 'pointer',
            border: 'none',
          }}
        >
          {leftButtonTitle}
        </button>
      )}
      <input
        type="text"
        placeholder={placeholder}
        disabled={writable === false ? true : false}
        style={{
          width: '100%',
          padding: '8px 10px 8px 10px',
          borderRadius: '0px',
          border: `1px solid ${lightTheme.lightgrey}`,
          outline: 'none',
          color: `${lightTheme.textColor}`,
        }}
      ></input>
      {showRightButton && (
        <button
          style={{
            textTransform: 'none',
            borderRadius: '0px',
            padding: '5px 10px',
            background: `${lightTheme.lightgrey}`,
            color: `${lightTheme.headingTextColor}`,
            cursor: 'pointer',
            border: 'none',
          }}
        >
          {rightButtonTitle}
        </button>
      )}
    </div>
  );
};

export default InputFieldDoubleButtons;
