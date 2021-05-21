import React from 'react';
import * as PropTypes from 'prop-types';

const BlueButton = (props) => {
  const { label } = props;
  return (
    <button data-testid="core-button" style={{ backgroundColor: 'darkblue', color: 'white' }}>
      {label}
    </button>
  );
};

BlueButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default BlueButton;
