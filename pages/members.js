import { getAllPlayers } from '../api/playerData';

export default function Members() {
  console.warn(getAllPlayers());
  return <h1>This is the members page</h1>;
}
