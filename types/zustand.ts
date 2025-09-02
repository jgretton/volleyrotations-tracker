import { Match } from ".";

export interface MatchStore {
	match: Match;

	setTeamName: (teamType: "home" | "away", name: string) => void;
}
