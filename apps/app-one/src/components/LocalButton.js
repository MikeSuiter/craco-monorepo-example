import React from 'react';
import * as PropTypes from 'prop-types';

const LocalButton = (props) => {
  const { label } = props;
  return (
    <button data-testid="core-button" style={{ backgroundColor: 'darkorange', color: 'white' }}>
      {label}
    </button>
  );
};

LocalButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default LocalButton;
