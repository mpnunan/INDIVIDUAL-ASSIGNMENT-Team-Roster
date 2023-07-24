import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSinglePlayer } from '../api/playerData';

export default function PlayerTableEntry({ firebaseKey }) {
  const [playerObj, setPlayerObj] = useState({});

  const getPlayer = (key) => {
    getSinglePlayer(key).then(setPlayerObj);
  };

  useEffect(() => {
    getPlayer(firebaseKey);
  }, [firebaseKey]);

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
  firebaseKey: PropTypes.string.isRequired,
};
