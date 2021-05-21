import React from 'react';
import * as PropTypes from 'prop-types';

const PinkButton = (props) => {
  const { label } = props;
  return (
    <button data-testid="core-button" style={{ backgroundColor: 'deeppink', color: 'white' }}>
      {label}
    </button>
  );
};

PinkButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PinkButton;
