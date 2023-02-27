import React from "react";
import { Box, Grid, Badge, Stack,Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineBell } from "react-icons/ai";
import person from '../../assets/person.png'



const NavBar = () => {


  const BoxStyle = {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    borderRadius: '10px',
    padding:'5px 0'
  };
  const navbarStyle = {
    // border: '1px solid black',
    // backgroundColor: 'red',
  };
  const infoSide = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingRight: '15px',
    paddingBottom: '10px',
  }
  const personInfo = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    // border:'1px solid red',
    padding:'0 15px'
  }


  const NameandDesignation = {
    // border: '1px solid black',
    // fontWeight: '500',
    // height: '100%',
    fontSize: '12px',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'end',
    // justifyContent:'space-between'
    marginRight: '10px',
    paddingTop: '5px',
    fontFamily: 'Archivo',
  }

 const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));


  return (
    <Box sx={BoxStyle}>
      <Grid container sx={navbarStyle}>
        <Grid item lg={2} sm={2} xs={2}px={2} border>
          <h4 style={{ color: '#022658', fontFamily: 'Archivo'}}>Dashboard</h4>
        </Grid>
        <Grid item lg={10} sm={10} xs={10} sx={infoSide}>
          <HiOutlineMenuAlt2 size={25} style={{paddingRight:'5px',cursor:'pointer'}} color="gray"/>
          <Badge badgeContent={4} color='error' style={{ paddingLeft: '10px', marginRight: '5px',cursor:'pointer'}}>
            <AiOutlineBell size={20} color="gray"/>
          </Badge>
         
            
          <Stack sx={personInfo}>
            <Box sx={ NameandDesignation }>
              <p style={{ marginBottom: '-5px', marginTop: '6px', fontWeight: '600', letterSpacing: '0.5px', fontFamily: 'Archivo', textAlign:'right',color:'gray'}}>john doe</p>
              <p style={{ fontWeight: '500',letterSpacing: '1px', textAlign: 'right', color:'#E2E2E2'}}>Admin</p>
          </Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
            >
              <Avatar alt="Remy Sharp" srcSet={person} style={{border:'1px solid #e2e2e2'}}/>
              </StyledBadge>
              
          </Stack>
        </Grid>
      </Grid>
      </Box>
  
  );
};

export default NavBar;
