import React from 'react';
import PropTypes from 'prop-types';

export default function TeamDisplay({ teamObj }) {
  return <h1>{teamObj.name}</h1>;
}

TeamDisplay.propTypes = {
  teamObj: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
