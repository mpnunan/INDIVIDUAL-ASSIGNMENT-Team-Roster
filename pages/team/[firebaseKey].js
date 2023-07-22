import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getTeamRoster, getSingleTeam } from '../../api/teamData';
import RosterTable from '../../components/RosterTable';

export default function TeamDetails() {
  const [teamRoster, setTeamRoster] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;
  const thisTeam = getSingleTeam(firebaseKey);

  const getRoster = (key) => {
    getTeamRoster(key).then(setTeamRoster);
  };

  useEffect(() => {
    getRoster(firebaseKey);
  }, [firebaseKey]);

  console.warn(teamRoster);
  return (
    <>
      <RosterTable key={thisTeam.firebaseKey} teamObj={thisTeam} roster={teamRoster} />
    </>
  );
}
