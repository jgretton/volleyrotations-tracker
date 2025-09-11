import { initialMatch } from "@/data/intialmatch";
import { MatchStore } from "@/types/zustand";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useMatchStore = create<MatchStore>()(
	persist(
		(set, get) => ({
			match: initialMatch,
			resetMatch: () => {
				set(() => ({
					match: initialMatch,
				}));
			},
			setTeamName: (teamType, name) => {
				const team = teamType === "home" ? "homeTeam" : "awayTeam";
				set((state) => ({
					...state,
					match: {
						...state.match,
						[team]: {
							...state.match[team],
							teamName: name,
						},
					},
				}));
			},
			setTeamNames: (homeTeamName, awayTeamName) => {
				set((state) => ({
					...state,
					match: {
						...state.match,
						homeTeam: {
							...state.match.homeTeam,
							teamName: homeTeamName,
						},
						awayTeam: {
							...state.match.awayTeam,
							teamName: awayTeamName,
						},
					},
				}));
			},
			setTeamPlayers: (teamType, players) => {
				const team = teamType === "home" ? "homeTeam" : "awayTeam";
				set((state) => ({
					...state,
					match: {
						...state.match,
						[team]: {
							...state.match[team],
							players: players,
						},
					},
				}));
			},
			setTeamStartingLineup(teamType, players) {
				const team = teamType === "home" ? "homeTeam" : "awayTeam";
				set((state) => ({
					...state,
					match: {
						...state.match,
						[team]: {
							...state.match[team],
							startingLineup: players,
						},
					},
				}));
			},
			getTeamPlayers: (teamType) => {
				const team = teamType === "home" ? "homeTeam" : "awayTeam";
				return get().match[team].players;
			},
		}),
		{
			name: "VolleyRotation-MatchData",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
