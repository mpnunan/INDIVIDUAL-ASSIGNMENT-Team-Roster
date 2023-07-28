import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePlayer } from '../../../api/playerData';
import PlayerForm from '../../../components/PlayerForm';

export default function EditPlayer() {
  const [playerUpdate, setPlayerUpdate] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSinglePlayer(firebaseKey).then(setPlayerUpdate);
  }, [firebaseKey]);
  return (<PlayerForm playerObj={playerUpdate} />);
}
