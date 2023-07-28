import { deletePlayer, updatePlayer } from './playerData';
import { getSingleTeam, updateTeam } from './teamData';

const draftPlayer = async (payload, teamFirebaseKey) => {
  await updatePlayer(payload);
  await getSingleTeam(teamFirebaseKey)
    .then((team) => {
      team.roster.push(payload.firebaseKey);
      return team;
    })
    .then((newRoster) => updateTeam(newRoster, teamFirebaseKey));
};

const cutPlayer = async (playerFirebaseKey, teamFirebaseKey) => {
  await deletePlayer(playerFirebaseKey);
  await getSingleTeam(teamFirebaseKey)
    .then((team) => {
      const player = team.roster.indexOf(playerFirebaseKey);
      team.roster.splice(player, 1);
      return team.roster;
    })
    .then((rosterArr) => {
      updateTeam({ roster: rosterArr }, teamFirebaseKey);
    });
};

export { draftPlayer, cutPlayer };
