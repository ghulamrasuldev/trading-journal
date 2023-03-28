import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

import PrimaryButton from '../../../components/common/PrimaryButton';
import SecondaryButton from '../../../components/common/SecondaryButton';
import { lightTheme } from '../../../Theme/theme';

const SettingAndConfigurations = () => {
  const divWithBorderBottom = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `2px solid ${lightTheme.badgeBackColorRGBA}`,
    padding: '5px 0px 5px 8px',
  };
  const accordionDataTitle = {
    color: `${lightTheme.textColor}`,
    fontSize: '14px',
    fontWeight: '500',
    margin: '3px 0',
  };
  const checkBoxColor = {
    color: `${lightTheme.headingTextColor}`,
  };
  const checkAndPara = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1px 0px 1px 0px',
  };

  return (
    <>
      <PrimaryButton buttonTitle="add settings for specific portfolios" />
      <div style={divWithBorderBottom}>
        <div>
          <p style={accordionDataTitle}>Options</p>
        </div>
        <FormControlLabel
          control={<Checkbox /*checked={allChecked? true: false}*/ size="medium" style={checkBoxColor} />}
        />
      </div>
      <div style={divWithBorderBottom}>
        <div>
          <p style={accordionDataTitle}>Crypto</p>
        </div>
        <FormControlLabel
          control={<Checkbox /*checked={allChecked? true: false}*/ size="medium" style={checkBoxColor} />}
        />
      </div>
      <div style={checkAndPara}>
        <FormControlLabel
          control={<Checkbox /*checked={allChecked? true: false}*/ size="medium" style={checkBoxColor} />}
        />
        <p style={accordionDataTitle}>Apply this configuration to your current trades broker</p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          columnGap: '20px',
        }}
      >
        <PrimaryButton buttonTitle="save changes" />
        <SecondaryButton buttonTitle="cancel" />
      </div>
    </>
  );
};

export default SettingAndConfigurations;
