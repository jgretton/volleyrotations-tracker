import { Match, PLAYER } from ".";

export interface MatchStore {
	match: Match;

	setTeamName: (teamType: "home" | "away", name: string) => void;
	setTeamPlayers: (teamType: "home" | "away", players: PLAYER[]) => void;
}
