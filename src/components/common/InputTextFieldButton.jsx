import React from 'react';
import { lightTheme } from '../../Theme/theme';
const InputTextFieldButton = ({ placeholder = '', showSideButton, writable, buttonTitle = '' }) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '10px 0px 10px 0px',
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        disabled={writable === false ? true : false}
        style={{
          width: '100%',
          padding: '8px 10px 8px 10px',
          borderRadius: '5px 0px 0px 5px',
          outline: 'none',
          border: `1px solid ${lightTheme.PageBackgroundColor}`,
          color: `${lightTheme.textColor}`,
        }}
      ></input>
      {showSideButton && (
        <button
          style={{
            textTransform: 'none',
            borderRadius: '0px 5px 5px 0px',
            padding: '5px 5px',
            background: `${lightTheme.headingTextColor}`,
            color: `${lightTheme.whiteText}`,
            cursor: 'pointer',
          }}
        >
          {buttonTitle}
        </button>
      )}
    </div>
  );
};

export default InputTextFieldButton;
