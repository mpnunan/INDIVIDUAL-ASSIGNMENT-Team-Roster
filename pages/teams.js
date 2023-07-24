import React, { useEffect, useState } from 'react';
import { getAllTeams } from '../api/teamData';
import TeamDisplay from '../components/TeamDisplay';

export default function MyTeams() {
  const [teams, setTeams] = useState([]);

  const getEveryTeam = () => {
    getAllTeams().then(setTeams);
  };

  useEffect(() => {
    getEveryTeam();
  }, []);

  return (
    <div className="teams">
      {teams.map((team) => (
        <TeamDisplay key={team.firebaseKey} teamObj={team} />
      ))}
    </div>
  );
}
