<script lang="ts">
  import { page } from '$app/stores';
  import playersJson from './players.json';

  // console.log(Object.keys(playersJson));
  // Define Player and Players types
  type Player = {
    player_name: string;
    birthcity: string;
    birthcountry: string;
    country_code: string;
    birthdate: string;
    height: string;
    weight: number;
    batside_code: string;
    pitchhand_code: string;
  };

  type Players = Record<string, Player>;

  const players: Players = playersJson;

  let player: Player | undefined;
  const playerId = String($page.params.playerId);
  console.log(playerId);
  // Reactive statement to update player
  $: player = players[playerId];
</script>

{#if player}
  <div>
    <h1>{player.player_name}</h1>
    <img src={`https://flagsapi.com/${player.country_code}/flat/64.png`} alt={`${player.birthcountry} flag`} />
    <p>Birth Date: {player.birthdate}</p>
    <p>Birth City: {player.birthcity}</p>
    <p>Birth Country: {player.birthcountry}</p>
    <p>Height: {player.height}</p>
    <p>Weight: {player.weight} lbs</p>
    <p>Bats: {player.batside_code}</p>
    <p>Throws: {player.pitchhand_code}</p>
  </div>
{:else}
  <p>Player not found.</p>
{/if}
