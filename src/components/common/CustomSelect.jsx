import React from 'react';
import Select from 'react-select';
// import { lightTheme } from '../../Theme/theme';
import ModeChange from '../../Theme/ChangeMode';

const CustomSelect = ({ ...inputProps }) => {

  const lightTheme=ModeChange()

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'none',
      },
      cursor: 'pointer',
      backgroundColor: `${lightTheme.selectColor}`,
      border: `1px solid ${lightTheme.selectBorderColor}`,
      // color:'red'

    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? `${lightTheme.lightDarkBlue}` : 'white',
      color: state.isSelected ? `${lightTheme.textColor}` : `${lightTheme.textColor}`,
      '&:hover': {
        backgroundColor: `${lightTheme.lightDarkBlue}`,
        color:'white'
      },
      cursor: 'pointer',
      backgroundColor:`${lightTheme.selectColor}`
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color:`${lightTheme.selectValueColor}`,
    }),
    placeholder: (provided) => ({
      ...provided,
      color:`${lightTheme.selectValueColor}`,
    }),
    
  };

  return (
    <>
      <Select {...inputProps} styles={customStyles} />
    </>
  );
};

export default CustomSelect;
