import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function TeamDisplay({ teamObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{teamObj.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Link href={`/team/${teamObj.firebaseKey}`} passHref>
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
