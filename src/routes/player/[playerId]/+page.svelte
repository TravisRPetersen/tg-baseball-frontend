<script lang="ts">
  import { page } from '$app/stores';
  import playersJson from './players.json';
  import getColor from "$lib";

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
    headshot: string;
    bbref_id: string;
    rating: number;
    potential: number;
  };

  type Players = Record<string, Player>;

  const players: Players = playersJson;

  let player: Player | undefined;
  const playerId = String($page.params.playerId);

  // Reactive statement to update player
  $: player = players[playerId];
</script>

<style>
  .profile-container {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    max-width: 600px;
    margin: auto;
    font-family: Arial, sans-serif;
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
    margin-right: 1rem;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .ratings-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-right: 1rem;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    height: 30px;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
    text-align: center;
    background-color: #ddd;
  }

  .text-info {
    line-height: 1.5;
    color: #333;
  }

  .text-info span {
    font-weight: bold;
  }

  h1 {
    font-size: 1.2rem;
    margin: 0;
  }

  .flag {
    width: 20px;
    height: 15px;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
</style>

{#if player}
  <div class="profile-container">
    <div>
      <img
        src="{player.headshot}"
        alt="{player.player_name}'s avatar"
        class="profile-image"
      />
      <div class="ratings-container">
        <div
          class="rating"
          style="background-color: {getColor(player.potential)};"
        >
        {player.rating} Overall
        </div>
        <div
          class="rating"
          style="background-color: {getColor(player.potential)};"
        >
        {player.potential} Potential
        </div>
      </div>
    </div>
    <div class="profile-info">
      <h1>
        {player.player_name}
        <img
          src={`https://flagsapi.com/${player.country_code}/flat/64.png`}
          alt="{player.birthcountry} flag"
          class="flag"
        />
      </h1>
      <div class="text-info">
        Birth Date: <span>{player.birthdate}</span><br />
        Birth City: <span>{player.birthcity}</span><br />
        Height: <span>{player.height}</span><br />
        Weight: <span>{player.weight} lbs</span><br />
        Bats: <span>{player.batside_code}</span><br />
        Throws: <span>{player.pitchhand_code}</span>
      </div>
    </div>
  </div>
{:else}
  <p>Player not found.</p>
{/if}
