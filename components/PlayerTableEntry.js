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
      <td>
        <a href={`/player/${playerObj.firebaseKey}`}>{playerObj.name}{playerObj.captain ? '  "C"' : ''}</a>
      </td>
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
    firebaseKey: PropTypes.string,
  }).isRequired,
  firebaseKey: PropTypes.string.isRequired,
};
