import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';
import Link from 'next/link';
import PlayerTableEntry from './PlayerTableEntry';

export default function RosterTable({ teamObj, rosterArr }) {
  return (
    <>
      <Link href={`/new/${teamObj.firebaseKey}`} passHref>
        <Button variant="primary" className="m-2">Draft Player</Button>
      </Link>
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
            <PlayerTableEntry key={player} firebaseKey={player} />
          ))}
        </tbody>
      </Table>
    </>
  );
}

RosterTable.propTypes = {
  teamObj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  rosterArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
