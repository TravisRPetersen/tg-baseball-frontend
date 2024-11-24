// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

interface Player {
  batting_order: number | null;
  player_id: string;
  rating: number;
  player_name: string;
  headshot: string;
  ratings: number;
}

interface Roster {
  LF: Player;
  RF: Player;
  CF: Player;
  C: Player;
  "1B": Player;
  "2B": Player;
  "3B": Player;
  SS: Player;
  DH: Player;
  SP: Player;
}

interface Team {
  team_name: string;
  image: string;
  rating: number;
  roster: Roster;
}

interface Game {
  home: Team;
  away: Team;
}


declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Player extends Player { }
		interface TeamLineup extends TeamLineup { }

	}
}

export { Player, Roster, Team, Game };
