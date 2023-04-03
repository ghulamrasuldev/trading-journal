import React from 'react';
import ModeChange from '../../Theme/ChangeMode';
// import { lightTheme } from '../../Theme/theme';
const InputTextField = ({ placeholder = '', writable }) => {
  const lightTheme = ModeChange()
  const inputStyle={
    width: '100%',
    padding: '8px 10px 8px 10px',
    borderRadius: '5px 5px 5px 5px',
    outline: 'none',
    border: `1px solid ${lightTheme.PageBackgroundColor}`,
    color: `${lightTheme.textColor}`,
  }
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
        style={inputStyle}
      ></input>
    </div>
  );
};

export default InputTextField;
