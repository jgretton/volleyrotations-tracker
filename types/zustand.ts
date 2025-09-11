import { Match, PLAYER, SelectedPlayer } from ".";

export type TeamType = "home" | "away";

export interface MatchStore {
	match: Match;

	resetMatch: () => void;

	setTeamName: (teamType: TeamType, name: string) => void;
	setTeamNames: (homeTeamName: string, awayTeamName: string) => void;
	setTeamPlayers: (teamType: TeamType, players: PLAYER[]) => void;
	setTeamStartingLineup: (
		teamType: TeamType,
		players: SelectedPlayer[]
	) => void;

	getTeamPlayers: (teamType: TeamType) => PLAYER[];
}
