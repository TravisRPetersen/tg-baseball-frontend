<script lang="ts">
  // info for images
  import type { Game } from "../app";
  import TeamChart from "./teamChart.svelte";
  import data from "./matchup.json";
  const game: Game = data;
</script>

<div class="font-use">
  <div class="svg-container">
    {#if !game}
      <p>Loading...</p>
    {:else}
      <div class="baseball-diamonds">
        <TeamChart team={data.away} type="away" />
        <TeamChart team={data.home} type="home" />
      </div>
    {/if}
  </div>
</div>

<style>
  .svg-container {
    max-width: 500px;
    margin: auto;
    text-align: center;
    padding: 1rem;
  }
  .baseball-diamonds {
    display: flex;
    gap: 20px;
    justify-content: center; /* Centers the diamonds horizontally */
    align-items: center; /* Centers the diamonds vertically */
  }

</style>
