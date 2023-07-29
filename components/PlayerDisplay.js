import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { cutPlayer } from '../api/mergedData';

export default function PlayerDisplay({ playerObj }) {
  const router = useRouter();

  const deleteThisPlayer = () => {
    if (window.confirm(`Delete ${playerObj.name}?`)) {
      cutPlayer(playerObj.firebaseKey, playerObj.team)
        .then(() => {
          router.push(`/team/${playerObj.team}`);
        });
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{playerObj?.name}</Card.Title>
        <Card.Text>
          {playerObj?.role}
        </Card.Text>
        <Card.Text>
          {`for ${playerObj?.teamName}`}
        </Card.Text>
        <Card.Text>
          {'# '}{`${playerObj?.jerseyNumber}`}
        </Card.Text>
        <Link href={`/player/edit/${playerObj?.firebaseKey}`} passHref>
          <Button variant="primary">Update Info</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisPlayer}>
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

PlayerDisplay.propTypes = {
  playerObj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    role: PropTypes.string,
    teamName: PropTypes.string,
    jerseyNumber: PropTypes.string,
    team: PropTypes.string,
  }).isRequired,
};
