import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
// import { lightTheme } from '../../Theme/theme';
import NavBar from '../../components/NavBar/NavBar';
import './journal.css';
import JournalComponent from '../JournalSetting/JournalComponent';
import ModeChange from '../../Theme/ChangeMode';


const Journal = () => {
  const lightTheme=ModeChange()
  const [navbarTitle, setNavbarTitle] = useState('Trade Setting');


  const mainDiv = {
    padding: '30px 25px',
    backgroundColor: `${lightTheme.lightPageBackground}`,
    // backgroundColor:'red',
    // border:'1px solid black',

    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  // const navTitle = () => {
  //   setNavbarTitle('a');
  // };

  return (
    <div>
      <Box sx={mainDiv}>
        <NavBar name={navbarTitle} />
        <JournalComponent setNavbarTitle={setNavbarTitle} />
      </Box>
    </div>
  );
};

export default Journal;
