import { clientCredentials } from '../utils/client';
import { getAllTeams } from './teamData';

const endpoint = clientCredentials.databaseURL;

const getPlayers = async (uid) => {
  const response = await fetch(`${endpoint}/players.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const players = await response.json();
  return Object.values(players);
};

const getAllPlayers = async () => {
  const response = await fetch(`${endpoint}/players/.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const players = await response.json();
  return Object.values(players);
};

const getSinglePlayer = async (firebaseKey) => {
  const response = await fetch(`${endpoint}/players/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const player = await response.json();
  return player;
};

const createPlayer = async (payload) => {
  const response = await fetch(`${endpoint}/players/.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const newPlayer = await response.json();
  return newPlayer;
};

const updatePlayer = async (payload) => {
  const response = await fetch(`${endpoint}/players/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const player = await response.json();
  return player;
};

const getplayerTeam = async (playerFirebaseKey) => {
  let playerTeam = '';
  await getAllTeams()
    .then((teams) => {
      teams.forEach((team) => {
        if ([team.roster].includes(playerFirebaseKey)) {
          playerTeam = team.firebaseKey;
        }
      });
    });
  return playerTeam;
};

export {
  getPlayers, getSinglePlayer, createPlayer, getplayerTeam, getAllPlayers, updatePlayer,
};
