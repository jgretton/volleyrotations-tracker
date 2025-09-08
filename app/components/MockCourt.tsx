"use client";

import { useState } from "react";

export default function MockCourt({ netSide }: { netSide: "left" | "right" }) {
	// const VolleyballCourtPositions = [5, 4, 6, 3, 1, 2]; // net on the right
	// const VolleyballCourtPositions = [2, 1, 3, 6, 4, 5]; // net on the left

	const VolleyballCourtPositions =
		netSide === "left" ? [2, 1, 3, 6, 4, 5] : [5, 4, 6, 3, 1, 2];
	const VolleyballPlayers = [
		{
			position: 4,
			player: {
				id: "a5534ead-7c1a-41c7-8f8a-fbec16494f40",
				name: "Josh",
				number: 1,
			},
		},
		{
			position: 3,
			player: {
				id: "e8c138ba-ed70-432e-9485-627c4650863f",
				name: "Joe",
				number: 2,
			},
		},
		{
			position: 2,
			player: {
				id: "49953b66-6238-4373-8b1c-23e83771e43b",
				name: "James",
				number: 3,
			},
		},
		{
			position: 5,
			player: {
				id: "0347cfc9-9b56-40e0-953d-917448227d8b",
				name: "jimmy",
				number: 41,
			},
		},
		{
			position: 6,
			player: {
				id: "f2c25ad5-8373-4249-a9a8-941aec2a982a",
				name: "Jobby",
				number: 9,
			},
		},
		{
			position: 1,
			player: {
				id: "68cb890c-5982-4e21-ad3b-e4e7b104ce71",
				name: "Mesh",
				number: 5,
			},
		},
	];

	const [rotatedPlayers, setRotatedPlayers] = useState(VolleyballPlayers);
	const Rotate = (players) => {
		const tempArray = players
			.map((player) => {
				const newPosition = player.position === 1 ? 6 : player.position - 1;
				return { ...player, position: newPosition };
			})
			.sort(
				(a, b) =>
					VolleyballCourtPositions.indexOf(a.position) -
					VolleyballCourtPositions.indexOf(b.position)
			);
		setRotatedPlayers(tempArray);
	};

	return (
		<div
			className={`grid grid-cols-2 grid-rows-3 gap-10 ${
				netSide === "left" ? "border-r-2 pr-2 " : "border-l-2 pl-2"
			}`}
		>
			{rotatedPlayers.map((player) => (
				<div
					key={player.player.id}
					className="size-40 bg-blue-300 flex items-center justify-center text-center"
				>
					{player.player.name}
					<br />
					{player.position}
				</div>
			))}

			<button onClick={() => Rotate(rotatedPlayers)} className="mt-10">
				Rotate
			</button>
		</div>
	);
}
