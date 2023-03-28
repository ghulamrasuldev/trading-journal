import React, { useState } from 'react';
import CustomModal from '../../../components/common/CustomModal';
import CustomButton from '../../../components/common/CustomButton';
import ShareWithAnyOne from './ShareWithAnyOne';
import ApplyCommission from './ApplyCommission';
import SettingAndConfigurations from './SettingAndConfigurations';

const Commission = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CustomModal
        modalHeading="Configure Automatic Commissions"
        open={modalOpen}
        handleClose={handleModalClose}
        components={[<ShareWithAnyOne />, <ApplyCommission />, <SettingAndConfigurations />]}
      />

      <button onClick={handleModalOpen}>open</button>
    </>
  );
};

export default Commission;
