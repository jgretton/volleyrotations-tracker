import { Match, SCORE, TEAM } from "@/types";
const initialTeam: TEAM = {
	id: crypto.randomUUID(),
	teamName: "",
	players: [],
	substitutes: [],
};

const initialScore: SCORE = {
	awayTeam: 0,
	homeTeam: 0,
};

export const initialMatch: Match = {
	awayTeam: initialTeam,
	homeTeam: initialTeam,
	score: initialScore,
};
