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
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? `${lightTheme.headingTextColor}` : 'white',
      color: state.isSelected ? 'white' : `${lightTheme.textColor}`,
      '&:hover': {
        backgroundColor: 'lightgray',
      },
      cursor: 'pointer',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: `${lightTheme.textColor}`,
    }),
  };

  return (
    <>
      <Select {...inputProps} styles={customStyles} />
    </>
  );
};

export default CustomSelect;
