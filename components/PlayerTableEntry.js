import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerTableEntry({ playerObj }) {
  console.warn({ playerObj });
  return (
    <tr>
      <td>{playerObj.jerseyNumber}</td>
      <td>{playerObj.name}{playerObj.captain ? '  "C"' : ''}</td>
      <td>{playerObj.role}</td>
    </tr>
  );
}

PlayerTableEntry.propTypes = {
  playerObj: PropTypes.shape({
    name: PropTypes.string,
    jerseyNumber: PropTypes.number,
    role: PropTypes.string,
    captain: PropTypes.bool,
  }).isRequired,
};
