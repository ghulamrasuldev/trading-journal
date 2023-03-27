import React from 'react';
import { lightTheme } from '../../Theme/theme';

const CustomButton = ({ buttonTitle, disabled }) => {
  return (
    <button
      disabled={disabled === true ? true : false}
      style={{
        borderRadius: '6px 6px 6px 6px',
        padding: '6px 20px',
        background: `${lightTheme.headingTextColor}`,
        color: `${lightTheme.whiteText}`,
        cursor: 'pointer',
        margin: '5px 0px 5px 0px',
      }}
    >
      {buttonTitle}
    </button>
  );
};

export default CustomButton;
