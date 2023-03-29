import React from 'react';
import { Box, Grid, Badge, Stack, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import avatar from '../../assets/avatar.png';
import NotificationMenu from './NotificationMenu/NotificationMenu';
import Filter from './Filters/Filter';
import { lightTheme } from '../../Theme/theme';

const NavBar = ({ name }) => {
  const mainDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    width: '100%',
    height: '62px',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    boxShadow: 'rgba(99, 99, 99, 0.3) 0px 2px 8px 0px',
    borderRadius: '6px',
  };
  const rightDiv = {
    display: 'flex',
    alignItems: 'center',
  };
  const filterAndNotify = {
    display: 'flex',
  };
  const leftDiv = {
    color: `${lightTheme.headingTextColor}`,
  };

  const personInfo = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  };

  const NameandDesignation = {
    fontSize: '12px',
    paddingTop: '2px',
    marginRight: '10px',
    lineHeight: '15px',
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const userStyle = {
    fontWeight: '600',
    letterSpacing: '0.5px',
    textAlign: 'right',
    color: `${lightTheme.textColor}`,
  };
  const admin = {
    fontWeight: '500',
    letterSpacing: '1px',
    textAlign: 'right',
    color: `${lightTheme.userPost}`,
  };

  return (
    <div style={mainDiv}>
      <div>
        <h4 style={leftDiv}>{name}</h4>
      </div>
      <div style={rightDiv}>
        <div style={filterAndNotify}>
          <Filter />
          <NotificationMenu />
        </div>
        <Stack sx={personInfo}>
          <Box sx={NameandDesignation}>
            <p style={userStyle}>John Doe</p>
            <p style={admin}>Admin</p>
          </Box>
          <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
            <Avatar
              alt="Remy Sharp"
              srcSet={avatar}
              style={{ border: '1px solid #e2e2e2', backgroundColor: `${lightTheme.avatarBackgroundRGBA}` }}
            />
          </StyledBadge>
        </Stack>
      </div>
    </div>
  );
};

export default NavBar;
