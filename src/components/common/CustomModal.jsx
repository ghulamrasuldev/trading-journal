import React from 'react';
import { Modal, Fade, Box } from '@mui/material';
// import { lightTheme } from '../../Theme/theme';
import './CustomModal.css';
import ModeChange from '../../Theme/ChangeMode';

const CustomModal = ({ open, handleClose, components, modalHeading = '' }) => {
  const lightTheme=ModeChange()
  const handleModalClose = () => {
    handleClose();
  };
  const modalStyling = {
    minHeight: '650px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: ' 550px',
    bgcolor: `${lightTheme.ComponentBackgroundColor}`,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
  };
  const headerStyling = {
    minHeight: '90px',
    bgcolor: `${lightTheme.lightDarkBlue}`,
    borderRadius: '20px 20px 0px 0px',
    fontSize: '24px',
    fontWeight: 500,
    color: `${lightTheme.whiteText}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const bodyStyling = {
    borderRadius: '0px 0px 20px 20px',
    color: `${lightTheme.textColor}`,
    paddingLeft: '25px',
    paddingRight: '26px',
    marginTop: '20px',
    maxHeight: '80vh',
    overflowY: 'auto',
  };
  const renderModalContent = () => {
    return (
      <div>
        {components.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>
    );
  };

  return (
    <Modal open={open} onClose={handleModalClose} closeAfterTransition>
      <Fade in={open}>
        <Box sx={modalStyling}>
          <Box sx={headerStyling}>{modalHeading}</Box>
          <Box sx={bodyStyling} className="modalClass">
            {renderModalContent()}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
