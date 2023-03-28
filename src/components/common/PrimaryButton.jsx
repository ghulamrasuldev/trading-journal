import React from 'react';
import { lightTheme } from '../../Theme/theme';

const PrimaryButton = ({ buttonTitle, disabled }) => {
  return (
    <button
      disabled={disabled === true ? true : false}
      style={{
        borderRadius: '5px',
        padding: '10px 20px',
        background: `${lightTheme.headingTextColor}`,
        color: `${lightTheme.whiteText}`,
        cursor: 'pointer',
        margin: '5px 0px 5px 0px',
        textTransform: 'uppercase',
        border: 'none',
      }}
    >
      {buttonTitle}
    </button>
  );
};

export default PrimaryButton;
