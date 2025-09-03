import { initialMatch } from "@/data/intialmatch";
import { MatchStore } from "@/types/zustand";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useMatchStore = create<MatchStore>()(
	persist(
		(set, get) => ({
			match: initialMatch,
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
			setTeamPlayers(teamType, players) {
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
		}),
		{
			name: "VolleyRotation-MatchData",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
