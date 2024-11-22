// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces


interface Player {
	batting_order: number;
	player_id: string;
	rating: number;
	player_name: string;
	headshot: string;
	ratings: number;
}

interface TeamLineup {
	LF: Player;
	"2B": Player;
	RF: Player;
	"1B": Player;
	"3B": Player;
	SS: Player;
	DH: Player;
	CF: Player;
	C: Player;
	SP: Player;
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

export { Player, TeamLineup };
