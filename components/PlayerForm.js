import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { createPlayer, updatePlayer } from '../api/playerData';
import draftPlayer from '../api/mergedData';

const initialState = {
  name: '',
  jerseyNumber: 0,
  role: '',
  teamName: '',
  captain: false,
};

const initialTeamState = {
  firebaseKey: '',
  name: '',
};

export default function PlayerForm({ playerObj, teamObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [team, setTeam] = useState({});
  const router = useRouter();
  const { user } = useAuth();
  const { firebaseKey } = router.query;

  useEffect(() => {
    if (playerObj.firebaseKey) setFormInput(playerObj);
    if (teamObj) setTeam(teamObj);
  }, [playerObj, user, firebaseKey, teamObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerObj.firebaseKey) {
      updatePlayer(formInput).then(() => router.push(`/player/${playerObj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid, teamName: team?.name };
      createPlayer(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        draftPlayer(patchPayload, team?.firebaseKey).then(() => {
          router.push(`/team/${firebaseKey}`);
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>{ playerObj.firebaseKey ? 'Update' : `${team?.name} would like to draft the following player` }</h1>
      <FloatingLabel controlId="name" label="Name">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="jerseyNumber" label="Number">
        <Form.Control
          type="number"
          placeholder="Number"
          name="jerseyNumber"
          value={formInput.jerseyNumber}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <Form.Select
        aria-label="Position"
        name="role"
        onChange={handleChange}
        value={formInput.role}
        required
      >
        <option value="">Position</option>
        <option value="Goalie">Goalie</option>
        <option value="Center">Center</option>
        <option value="Left Wing">Left Wing</option>
        <option value="Right Wing">Right Wing</option>
        <option value="Defense">Defense</option>
      </Form.Select>
      <Button type="submit">{playerObj.firebaseKey ? 'Update' : 'Draft'} Player</Button>
    </Form>
  );
}

PlayerForm.propTypes = {
  playerObj: PropTypes.shape({
    name: PropTypes.string,
    jerseyNumber: PropTypes.number,
    role: PropTypes.string,
    teamName: PropTypes.string,
    captain: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
  teamObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
  }),
};

PlayerForm.defaultProps = {
  playerObj: initialState,
  teamObj: initialTeamState,
};
