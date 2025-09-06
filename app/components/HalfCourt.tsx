"use client";
interface HalfCourtProps {
	teamType: "home" | "away";
}

import { useMatchStore } from "@/store";
import { PLAYER, SelectedPlayer } from "@/types";
import { useRef, useState } from "react";

const volleyballPostions = [4, 3, 2, 5, 6, 1];
const initialSelectedPlayers = volleyballPostions.map((position) => ({
	position,
	player: {},
}));

export default function HalfCourt({ teamType }: HalfCourtProps) {
	const players = useMatchStore((state) => state.getTeamPlayers(teamType));
	const setTeamStartingLineup = useMatchStore(
		(state) => state.setTeamStartingLineup
	);

	const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayer[]>(
		initialSelectedPlayers
	);
	const [teamPlayers, setTeamPlayers] = useState<PLAYER[]>(
		() => players || null
	);
	const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

	const dialog = useRef<HTMLDialogElement>(null);

	const handlePlayerSelect = (player: PLAYER, position: number) => {
		const arrayIndex = selectedPlayers.findIndex(
			(array) => array.position === position
		);
		const selectedPlayersArray = [...selectedPlayers];
		selectedPlayersArray[arrayIndex].player = player;
		setSelectedPlayers(selectedPlayersArray);

		dialog.current?.close();

		setSelectedPosition(null);
	};

	const handleLineupSubmit = () => {
		const isFull = selectedPlayers.every((player) => player.player.name); // checks every position has a player assigned.

		if (!isFull) {
			console.log("Fill the spaces");
			return;
		} else {
			// add function for setting lineup
			setTeamStartingLineup(teamType, selectedPlayers);
		}
	};

	return (
		<div className="size-full">
			<div className="w-full aspect-square bg-green-800/40 relative p-10 max-w-lg">
				{/* net */}
				<div className="absolute inset-x-4  h-8 bg-slate-600 rounded-sm z-50" />
				<div className="size-full bg-orange-500 border-white border-8 relative">
					{/* 3m line */}
					<div className="absolute h-2 inset-x-0 top-[33%] bg-white" />
					{/* Content */}
					<div className="grid grid-cols-3 grid-rows-2 size-full pt-8">
						{selectedPlayers.map((position, index) => {
							return (
								<div
									className="size-full grid place-items-center z-10"
									key={index}
								>
									<button
										className="border-2 size-3/4 rounded-md bg-white/80 cursor-pointer hover:bg-white transition-colors"
										onClick={() => {
											dialog.current?.showModal();
											setSelectedPosition(position.position);
										}}
									>
										{position.player.id ? (
											<span># {position.player.number}</span>
										) : (
											position.position
										)}
									</button>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<button onClick={() => handleLineupSubmit()}>Open</button>

			<dialog
				ref={dialog}
				className=" max-w-lg m-auto p-20 bg-gray-200 backdrop:bg-gray-800/70"
			>
				<ul className="flex flex-col size-full items-center justify-center gap-4">
					{teamPlayers
						.filter(
							(player) =>
								!selectedPlayers.some(
									(selectedPlayer) => selectedPlayer.player.id === player.id
								)
						)
						.map((player) => (
							<li className="" key={player.id}>
								<button
									onClick={() => handlePlayerSelect(player, selectedPosition)}
								>
									<span className="text-lg font-medium mr-2">
										{player.number}
									</span>
									{player.name}
								</button>
							</li>
						))}
				</ul>
				<button onClick={() => dialog.current?.close()}> close</button>
			</dialog>
		</div>
	);
}
