<script lang="ts">
  import type { Player } from "../app";
  import getColor from "$lib";

  // plotting helpers
  let center = 2238; // center line
  let spacer = 500; // horizontal spacing
  let row1 = -670; // catcher
  let row2 = -1230; // pitcher
  let row3 = -1100; // 1b & 3b
  let row4 = -1300; // dh
  let row5 = -1900; // 2b & ss
  let row6 = -2150; // rf & lf
  let row7 = -2550; // cf

  let coordinates = {
    "1B": { x: center + 1.75 * spacer, y: row3 },
    "2B": { x: center + spacer, y: row5 },
    SS: { x: center - spacer, y: row5 },
    "3B": { x: center - 1.75 * spacer, y: row3 },
    LF: { x: center - 2.8 * spacer, y: row6 },
    CF: { x: center, y: row7 },
    RF: { x: center + 2.8 * spacer, y: row6 },
    SP: { x: center, y: row2 },
    C: { x: center, y: row1 },
    DH: { x: center + 3.5 * spacer, y: row4 },
  };

  // text for name plotting
  let textHeight = 250;

  type PositionKeys = keyof typeof coordinates;
  function getCoordinate(key: PositionKeys) {
    return coordinates[key];
  }

  // size & shape
  let radius = 270;
  let color = "#346eeb";
  let height = 320;
  let width = 213;

  // from claude
  let nameElement: SVGGraphicsElement;
  let ratingElement: SVGGraphicsElement;
  let textBox = { width: 0, height: 0 };

  // Reactive statement to update box dimensions when text changes
  $: if (nameElement && ratingElement) {
    const bbox1 = nameElement.getBoundingClientRect();
    const bbox2 = ratingElement.getBoundingClientRect();
    textBox = {
      width: bbox1.width + bbox2.width,
      height: bbox1.height + bbox2.height,
    };
  }

  // props
  export let position: PositionKeys;
  export let player: Player;
  export let type: string;
</script>

<g>
  <defs>
    <clipPath id="clip-{type}-{position}">
      <rect
        x={getCoordinate(position).x - width * 0.5}
        y={getCoordinate(position).y - height * 0.65}
        {height}
        {width}
        rx="50"
        ry="50"
      />
    </clipPath>
  </defs>
  <!-- Headshot items -->
  <rect
    class="image-border"
    x={getCoordinate(position).x - width * 0.5}
    y={getCoordinate(position).y - height * 0.65}
    {height}
    {width}
    rx="50"
    ry="50"
    style="fill:rgb(250,255,255);stroke-width:30;stroke:{color}"
    transform="scale(1,-1)"
  />
  <image
    href={player.headshot}
    id="DH_img"
    x={getCoordinate(position).x - radius * 0.4}
    y={getCoordinate(position).y - radius * 0.8}
    height="325"
    clip-path="url(#clip-{type}-{position})"
    transform="scale(1,-1)"
  />

  <!-- Text formatting -->
  <rect
    class="textBackground"
    x={getCoordinate(position).x - 4 * textBox.width}
    y={getCoordinate(position).y + 4.25 * textBox.height}
    width={textBox.width * 8.5}
    height={textBox.height * 4}
    fill="#393b3a"
    rx="50"
    transform="scale(1,-1)"
  />

  <!-- Text element -->
  <g class="player-text-{type}-{position}">
    <text
      bind:this={ratingElement}
      x={getCoordinate(position).x - textBox.width * 3}
      y={getCoordinate(position).y + textHeight}
      font-size="6em"
      text-anchor="middle"
      fill={getColor(player.rating)}
      transform="scale(1,-1)"
    >
      {player.rating}
    </text>
    <text
      bind:this={nameElement}
      x={getCoordinate(position).x + textBox.width}
      y={getCoordinate(position).y + textHeight}
      font-size="6em"
      text-anchor="middle"
      fill="white"
      transform="scale(1,-1)"
    >
      {player.player_name}
    </text>
  </g>
</g>
