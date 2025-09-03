"use client";

import { useState } from "react";

function PlayerInput({ index }: { index: number }) {
	return (
		<div className="flex flex-row gap-2 grid-cols-1 md:grid-cols-2 w-full">
			<label
				className="grid gap-1 place-items-center w-auto"
				htmlFor={`playerNumer - ${index}`}
			>
				<span className="text-sm font-medium"> #</span>
				<input
					type="text"
					className="rounded-md p-2 border border-gray-200 disabled:opacity-45 disabled:cursor-not-allowed w-full max-w-10"
					name={`playerNumber-${index}`}
					id={`playerNumber-${index}`}
				/>
			</label>
			<label className="grid gap-1 w-full" htmlFor={`playerName-${index}`}>
				<span className="text-sm font-medium">Player Name</span>
				<input
					type="text"
					className="rounded-md p-2 border border-gray-200 disabled:opacity-45 disabled:cursor-not-allowed w-full"
					name={`playerName-${index}`}
					id={`playerName-${index}`}
				/>
			</label>
		</div>
	);
}

export default function PlayerList() {
	const [totalPlayers, setTotalPlayers] = useState(6);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		console.log("this is the formData ", Object.fromEntries(formData));
	};
	return (
		<form className="w-full" onSubmit={handleSubmit}>
			{Array.from({ length: totalPlayers }, (_, index) => (
				<PlayerInput key={index} index={index} />
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
