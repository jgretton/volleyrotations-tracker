import { initialMatch } from "@/data/intialmatch";
import { MatchStore } from "@/types/zustand";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useMatchStore = create<MatchStore>()(
	persist(
		(set, get) => ({
			match: initialMatch,
			setTeamName: (teamType, name) =>
				set((state) => ({
					...state,
					match: {
						...state.match,
						[teamType === "home" ? "homeTeam" : "awayTeam"]: {
							...state.match[teamType === "home" ? "homeTeam" : "awayTeam"],
							teamName: name,
						},
					},
				})),
		}),
		{
			name: "VolleyRotation-MatchData",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
