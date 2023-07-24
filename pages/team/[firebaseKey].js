import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RosterTable from '../../components/RosterTable';
import { getSingleTeam } from '../../api/teamData';

export default function TeamDetails() {
  const [teamRoster, setTeamRoster] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;
  const team = getSingleTeam(firebaseKey);

  const getTeamRoster = (key) => {
    getSingleTeam(key).then((teamObj) => {
      setTeamRoster(teamObj.roster);
    });
  };

  // this is broken fix it. getteamroster return array of keys not objects.

  useEffect(() => {
    getTeamRoster(firebaseKey);
  }, [firebaseKey]);
  console.warn(teamRoster);
  return (
    <>
      <RosterTable key={firebaseKey} teamObj={team} rosterArr={teamRoster} />
    </>
  );
}
