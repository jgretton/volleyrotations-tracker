"use client";

interface PlayerListProps {
	teamType: "away" | "home";
}

import { useMatchStore } from "@/store";
import { PLAYER } from "@/types";
import { useState } from "react";

function PlayerInput({
	index,
	defaultValue,
}: {
	index: number;
	defaultValue: PLAYER;
}) {
	return (
		<div className="flex flex-row gap-2 grid-cols-1 md:grid-cols-2 w-full">
			<label
				className="grid gap-1 place-items-center w-auto"
				htmlFor={`playerNumer - ${index}`}
			>
				<span className="text-sm font-medium"> #</span>
				<input
					type="number"
					className="rounded-md p-2 border border-gray-200 disabled:opacity-45 disabled:cursor-not-allowed w-full max-w-10"
					name={`playerNumber-${index}`}
					id={`playerNumber-${index}`}
					defaultValue={defaultValue.number}
				/>
			</label>
			<label className="grid gap-1 w-full" htmlFor={`playerName-${index}`}>
				<span className="text-sm font-medium">Player Name</span>
				<input
					type="text"
					className="rounded-md p-2 border border-gray-200 disabled:opacity-45 disabled:cursor-not-allowed w-full"
					name={`playerName-${index}`}
					id={`playerName-${index}`}
					defaultValue={defaultValue.name}
				/>
			</label>
		</div>
	);
}

export default function PlayerList({ teamType }: PlayerListProps) {
	const [totalPlayers, setTotalPlayers] = useState(6);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const { match, setTeamPlayers } = useMatchStore();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		try {
			const formData = new FormData(event.currentTarget);
			const players = Array.from({ length: totalPlayers }, (_, index) => ({
				id: crypto.randomUUID(),
				name: formData.get(`playerName-${index}`) as string,
				number: Number(formData.get(`playerNumber-${index}`)),
			}));
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setTeamPlayers(teamType, players);
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const team = teamType === "home" ? "homeTeam" : "awayTeam";
	return (
		<form className="w-full" onSubmit={handleSubmit}>
			{Array.from({ length: totalPlayers }, (_, index) => (
				<PlayerInput
					key={index}
					index={index}
					defaultValue={match[team].players[index]}
				/>
			))}{" "}
			<button
				type="button"
				className="w-full mt-3 py-3 border rounded-md"
				onClick={() => setTotalPlayers((prevState) => prevState + 1)}
			>
				+ Add Player
			</button>
			<button type="submit" className="w-full mt-3 py-3 border rounded-md">
				Submit
			</button>
		</form>
	);
}
