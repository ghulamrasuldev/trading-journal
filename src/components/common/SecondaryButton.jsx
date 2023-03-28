import React from 'react';
import { lightTheme } from '../../Theme/theme';

const SecondaryButton = ({ buttonTitle, disabled }) => {
  return (
    <button
      disabled={disabled === true ? true : false}
      style={{
        borderRadius: '5px',
        padding: '10px 20px',
        background: `${lightTheme.ComponentBackgroundColor}`,
        color: `${lightTheme.textColor}`,
        cursor: 'pointer',
        margin: '5px 0px 5px 0px',
        border: `1px solid ${lightTheme.textColor}`,
        textTransform: 'uppercase',
      }}
    >
      {buttonTitle}
    </button>
  );
};

export default SecondaryButton;
