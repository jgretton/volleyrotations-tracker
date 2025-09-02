export interface Match {
	homeTeam: TEAM;
	awayTeam: TEAM;
	score: SCORE;
}

interface TEAM {
	id: string;
	teamName: string;
	players: PLAYER[];
	startingLineup?: STARTINGLINEUP;
	substitutes: SUBSTITUTE[];
}

interface SCORE {
	homeTeam: number;
	awayTeam: number;
}

interface PLAYER {
	id: string;
	name: string;
	number: number;
}

type STARTINGLINEUP = Record<COURT_POSITIONS, PLAYER>; // new ts type.

enum COURT_POSITIONS {
	POSITION_1 = 1,
	POSITION_2,
	POSITION_3,
	POSITION_4,
	POSITION_5,
	POSITION_6,
}

interface SUBSTITUTE {
	playerOn: PLAYER;
	playerOff: PLAYER;
	score: SCORE;
} // Typescript also auto increments from 1 so i only need to put the first value in.
