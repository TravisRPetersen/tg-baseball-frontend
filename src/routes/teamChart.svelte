<script lang="ts">
  import type { Roster, Team } from "../app";
  import Diamond from "./diamond.svelte";

  // props
  export let team: Team;
  export let type: string;
</script>

<div>
  <h1>{type}</h1>
  <div class="team-header">
    <img src={team.image} alt={team.team_name} height="90" />
    <h2>{team.team_name}</h2>
    <h3>{team.rating} overall</h3>
  </div>
  <Diamond roster={team.roster} {type} />
</div>

<style>
  .team-header {
    display: flex;
    align-items: center;
  }

  .team-header img {
    width: 33.33%;
    display: flex;
    justify-content: flex-start;
  }

  .team-header h2 {
    width: 33.33%;
    text-align: center;
    margin: 0;
  }

  .team-header h3 {
    width: 33.33%;
    text-align: center;
    margin: 0;
  }
</style>
