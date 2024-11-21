<script lang="ts">
  // info for images
  let svgPath: string = "/baseball_field_2.svg"; // Path to the SVG file in the static folder
  import MyIcon from "./baseball_field_3.svelte";
  import jsonData from "./toros.json";
</script>

<div class="svg-container">
  <h1>Baseball Field SVG</h1>
  <!-- <img src={svgPath} alt="Baseball Field" /> -->

  {#if !jsonData}
    <p>Loading...</p>
  {:else}
  
  <MyIcon jsonData={jsonData}/>
    <ul>
      {#each Object.entries(jsonData) as [key, value]}
        <li>
          <strong>{key}:</strong>
          {value.player_name}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<!-- Styles -->
<style>
  .svg-container {
    max-width: 500px;
    margin: auto;
    text-align: center;
    padding: 1rem;
  }
  /* img {
    max-width: 100%;
    height: auto;
  } */
</style>
