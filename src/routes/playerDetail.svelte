<script lang="ts">
  import type { Player } from "../app";

  // plotting helpers
  let center = 2238; // center line 
  let spacer = 500; // horizontal spacing
  let row1 = -670; // catcher
  let row2 = -1230; // pitcher
  let row3 = -1100; // 1b & 3b
  let row4 = -1300; // dh
  let row5 = -1850; // 2b & ss
  let row6 = -1950; // rf & lf
  let row7 = -2350; // cf

  let coordinates = {
    "1B": { x: center + 1.75 * spacer, y: row3 },
    "2B": { x: center + spacer, y: row5 },
    SS: { x: center - spacer, y: row5 },
    "3B": { x: center - 1.75 * spacer, y: row3 },
    LF: { x: center - 2.75 * spacer, y: row6 },
    CF: { x: center, y: row7 },
    RF: { x: center + 2.75 * spacer, y: row6 },
    SP: { x: center, y: row2 },
    C: { x: center, y: row1 },
    DH: { x: center + 3.5 * spacer, y: row4 },
  };

  type PositionKeys = keyof typeof coordinates;

  function getCoordinate(key: PositionKeys) {
    return coordinates[key];
  }

  // size & shape
  let radius = 270;
  let color = "#346eeb";
  let height = 320;
  let width = 213;

  // props
  export let position: PositionKeys;
  export let player: Player;
  // export let teamName: string;
  export let type: string;
</script>

<g>
  <defs>
    <clipPath id="circleClip-{type}-{position}">
      <!-- <circle cx={getCoordinate(position).x} cy={getCoordinate(position).y - 80} r="150"/> -->
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
  <rect
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
    clip-path="url(#circleClip-{type}-{position})"
    transform="scale(1,-1)"
  />
  <text
    x={getCoordinate(position).x}
    y={getCoordinate(position).y + 230}
    font-size="8em"
    text-anchor="middle"
    fill="white"
    transform="scale(1,-1)">{player.rating} {player.player_name}</text
  >
</g>
