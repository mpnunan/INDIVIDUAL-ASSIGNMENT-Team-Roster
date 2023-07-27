import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function PlayerDisplay({ playerObj }) {
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
          {`# ${playerObj?.jerseyNumber}`}
        </Card.Text>
        <Link href={`/player/edit//${playerObj?.firebaseKey}`} passHref>
          <Button variant="primary">Update Info</Button>
        </Link>
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
    jerseyNumber: PropTypes.number,
  }).isRequired,
};
