// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

interface Game {
  home: Team;
  away: Team;
}

interface Team {
  team_name: string;
  image: string;
  rating: number;
  roster: Roster;
}

interface Roster {
  "3B": Player;
  LF: Player;
  RF: Player;
  CF: Player;
  C: Player;
  "1B": Player;
  "2B": Player;
  SS: Player;
  DH: Player;
  SP: Player;
}

interface Player {
  player_name: string;
  player_id: number;
  headshot: string;
  batting_order: number | null;
  rating: number;
  birthcountry: string | null;
}

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
    interface Player extends Player {}
    interface TeamLineup extends TeamLineup {}
  }
}

export { Player, Roster, Team, Game };
