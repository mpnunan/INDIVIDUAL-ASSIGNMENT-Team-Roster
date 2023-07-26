import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePlayer } from '../../api/playerData';
import PlayerDisplay from '../../components/PlayerDisplay';

export default function PlayerDetails() {
  const [player, setPlayer] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const playerCard = (key) => {
    getSinglePlayer(key).then(setPlayer);
  };

  useEffect(() => {
    playerCard(firebaseKey);
  }, [firebaseKey]);
  return (
    <>
      <PlayerDisplay playerObj={player} />
    </>
  );
}
