"use client";

interface PlayerListProps {
	teamType: "away" | "home";
}

import { Input } from "@/components/ui/input";
import { useMatchStore } from "@/store";
import { PLAYER } from "@/types";
import { useState } from "react";

function PlayerInput({
	index,
	defaultValue,
}: {
	index: number;
	defaultValue: PLAYER | null;
}) {
	return (
		<div className="flex flex-row gap-2 grid-cols-1 md:grid-cols-2 w-full">
			<label
				className="grid gap-1 place-items-center w-auto"
				htmlFor={`playerNumer - ${index}`}
			>
				<span className="text-sm font-medium"> #</span>
				<Input
					type="number"
					className=" disabled:opacity-45 disabled:cursor-not-allowed w-full max-w-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
					name={`playerNumber-${index}`}
					id={`playerNumber-${index}`}
					defaultValue={defaultValue?.number}
				/>
			</label>
			<label className="grid gap-1 w-full" htmlFor={`playerName-${index}`}>
				<span className="text-sm font-medium">Player Name</span>
				<Input
					type="text"
					className=" disabled:opacity-45 disabled:cursor-not-allowed w-full"
					name={`playerName-${index}`}
					id={`playerName-${index}`}
					defaultValue={defaultValue?.name}
				/>
			</label>
		</div>
	);
}

export default function PlayerList({ teamType }: PlayerListProps) {
	const [totalPlayers, setTotalPlayers] = useState(6);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const match = useMatchStore((state) => state.match);
	const setTeamPlayers = useMatchStore((state) => state.setTeamPlayers);

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
		<form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
			{Array.from({ length: totalPlayers }, (_, index) => (
				<PlayerInput
					key={index}
					index={index}
					defaultValue={match[team].players[index] || null}
				/>
			))}{" "}
			<button
				type="button"
				className="rounded-md bg-slate-600 text-white py-2 px-2 font-medium hover:bg-slate-700 cursor-pointer focus:outline-2 focus:outline-slate-700 focus: outline-offset-2 disabled:bg-slate-400 disabled:cursor-not-allowed grid place-items-center w-full mt-2"
				disabled={isSubmitting}
				onClick={() => setTotalPlayers((prevState) => prevState + 1)}
			>
				+ Add Player
			</button>
			{/* <button
				type="submit"
				className="mt-5 rounded-md bg-violet-600 text-white py-2 px-2 font-medium hover:bg-violet-700 cursor-pointer focus:outline-2 focus:outline-violet-700 focus: outline-offset-2 disabled:bg-violet-400 disabled:cursor-not-allowed grid place-items-center w-full"
				disabled={isSubmitting}
			>
				Submit
			</button> */}
		</form>
	);
}
