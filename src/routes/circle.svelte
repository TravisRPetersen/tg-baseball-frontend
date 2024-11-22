<script lang="ts">
    // plotting helpers
    let coordinates = {
        "1B": { x: 705.42474, y: -2164.7356 },
        "2B": { x: 1350.1749, y: -1491.3363 },
        "3B": { x: 2551.7366, y: -1730.0504 },
        SS: { x: 1894.234, y: -1742.5742 },
        C: { x: 3074.6074, y: -1438.8706 },
        SP: { x: 2226.1162, y: -1238.4889 },
        DH: { x: 2238.6399, y: -668.6532 },
        LF: { x: 2235.509, y: -2434.5176 },
        CF: { x: 3566.1694, y: -2030.623 },
        RF: { x: 4148.5288, y: -1482.7042 },
    };

    type PositionKeys = keyof typeof coordinates;

    function getCoordinate(key: PositionKeys) {
        return coordinates[key];
    }

    // size & shape
    let radius = 270;
    let color = "#346eeb";

    // props
    export let position: PositionKeys;
    export let link: string;
    export let name: string;
</script>

<g>
    <defs>
        <clipPath id= "circleClip{position}">
          <circle cx={getCoordinate(position).x} cy={getCoordinate(position).y - 80} r="150"/>
        </clipPath>
      </defs>
    <circle
        style="fill:{color};fill-opacity:1;stroke-width:7.5"
        id={position}
        cx={getCoordinate(position).x}
        cy={getCoordinate(position).y}
        r={radius}
        transform="scale(1,-1)"
    />
    <image
        href={link}
        id="DH_img"
        x={getCoordinate(position).x - radius * 0.4}
        y={getCoordinate(position).y - radius * 0.8}
        clip-path="url(#circleClip{position})" 
        transform="scale(1,-1)"
    />
    <text
        x={getCoordinate(position).x}
        y={getCoordinate(position).y + 175}
        font-size="3em"
        text-anchor="middle"
        transform="scale(1,-1)">{name}</text
    >
</g>
