import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getTeams } from '../api/teamData';
import TeamDisplay from '../components/TeamDisplay';

export default function MyTeams() {
  const [teams, setTeams] = useState([]);

  const { user } = useAuth();

  const getMyTeams = () => {
    getTeams(user.uid).then(setTeams);
  };

  useEffect(() => {
    getMyTeams();
  }, []);

  return (
    <div className="teams">
      {teams.map((team) => (
        <TeamDisplay key={team.firebaseKey} teamObj={team} />
      ))}
    </div>
  );
}
