import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function TeamDisplay({ teamObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{teamObj?.name}</Card.Title>
        <Card.Text>
          Ice Cold
        </Card.Text>
        <Link href={`/team/${teamObj?.firebaseKey}`} passHref>
          <Button variant="primary">View Roster</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

TeamDisplay.propTypes = {
  teamObj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
