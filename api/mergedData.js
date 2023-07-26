import { updatePlayer } from './playerData';
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

export default draftPlayer;
