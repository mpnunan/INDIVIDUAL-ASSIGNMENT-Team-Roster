import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RosterTable from '../../components/RosterTable';
import { getSingleTeam } from '../../api/teamData';

export default function TeamDetails() {
  const [teamRoster, setTeamRoster] = useState([]);
  const [team, setTeam] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getTeamRoster = (key) => {
    getSingleTeam(key).then((teamObj) => {
      setTeamRoster(teamObj.roster);
    });
  };

  const getTeam = (key) => {
    getSingleTeam(key).then(setTeam);
  };

  useEffect(() => {
    getTeam(firebaseKey);
    getTeamRoster(firebaseKey);
  }, [firebaseKey]);
  return (
    <>
      <RosterTable key={firebaseKey} teamObj={team} rosterArr={teamRoster} />
    </>
  );
}
