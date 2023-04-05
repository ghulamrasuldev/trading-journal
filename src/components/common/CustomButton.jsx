import React from 'react';
// import { lightTheme } from '../../Theme/theme';
import ModeChange from '../../Theme/ChangeMode';

const CustomButton = ({ buttonTitle, disabled }) => {
  const lightTheme = ModeChange()
  const buttonStyle={
    borderRadius: '6px 6px 6px 6px',
    padding: '6px 20px',
    background: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
    cursor: 'pointer',
    margin: '5px 0px 5px 0px',
    border: 'none',
  }
  return (
    <button
      disabled={disabled === true ? true : false}
      style={buttonStyle}
    >
      {buttonTitle}
    </button>
  );
};

export default CustomButton;
