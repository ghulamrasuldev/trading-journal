import React from 'react';
// import { lightTheme } from '../../Theme/theme';
import ModeChange from '../../Theme/ChangeMode';

const PrimaryButton = ({ buttonTitle, disabled, ...inputProps }) => {
  const lightTheme = ModeChange()
  const buttonStyle={
    borderRadius: '5px',
    padding: '10px 20px',
    background: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
    cursor: 'pointer',
    margin: '5px 0px 5px 0px',
    textTransform: 'uppercase',
    border: 'none',
  }
  return (
    <button
      disabled={disabled === true ? true : false}
      style={buttonStyle}
      {...inputProps}
    >
      {buttonTitle}
    </button>
  );
};

export default PrimaryButton;
