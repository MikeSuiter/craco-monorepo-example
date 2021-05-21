import React from 'react';
import BlueButton from '@craco/btns/src/components/BlueButton';
import PinkButton from '@craco/btns/src/components/PinkButton';

const Layout = () => {
  return (
    <span>
      <BlueButton label="Remote Blue" />
      <PinkButton label="Remote Pink" />
    </span>
  );
};

export default Layout;
