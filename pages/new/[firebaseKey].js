import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PlayerForm from '../../components/PlayerForm';
import { getSingleTeam } from '../../api/teamData';

export default function AddPlayer() {
  const [team, setTeam] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTeam(firebaseKey).then(setTeam);
  }, [firebaseKey]);

  return <PlayerForm teamObj={team} />;
}
