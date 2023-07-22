import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTeams = async (uid) => {
  const response = await fetch(`${endpoint}/teams.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const teams = await response.json();
  return Object.values(teams);
};

const getAllTeams = async () => {
  const response = await fetch(`${endpoint}/teams/.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const teams = await response.json();
  return Object.values(teams);
};

const getSingleTeam = async (firebaseKey) => {
  const response = await fetch(`${endpoint}/teams/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const team = await response.json();
  return Object.values(team);
};

const createTeam = async (payload) => {
  const response = await fetch(`${endpoint}/teams/.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const newTeam = await response.json();
  return newTeam;
};

const getTeamRoster = async (firebaseKey) => {
  const team = await getSingleTeam(firebaseKey);
  return team.roster;
};

export {
  getTeams, getSingleTeam, createTeam, getTeamRoster, getAllTeams,
};
