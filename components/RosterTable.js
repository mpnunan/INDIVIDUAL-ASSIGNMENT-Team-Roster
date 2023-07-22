import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import PlayerTableEntry from './PlayerTableEntry';

export default function RosterTable({ teamObj, rosterArr }) {
  console.warn({ teamObj, rosterArr });
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th colSpan={4}>{ teamObj.name }</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th colSpan={2}>Position</th>
        </tr>
      </thead>
      <tbody>
        {rosterArr?.map((player) => (
          <PlayerTableEntry key={player.firebaseKey} playerObj={player} />
        ))}
      </tbody>
    </Table>
  );
}

RosterTable.propTypes = {
  teamObj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  rosterArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      jerseyNumber: PropTypes.number,
      role: PropTypes.string,
      captain: PropTypes.bool,
    }),
  ).isRequired,
};
