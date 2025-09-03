"use client";
interface HalfCourtProps {
	teamType: "home" | "away";
}

import { useMatchStore } from "@/store";

export default function HalfCourt({ teamType }: HalfCourtProps) {
	const players = useMatchStore((state) => state.getTeamPlayers(teamType));
	const positions = 6;

	return (
		<div className="w-full aspect-square bg-green-800/40 relative p-10 max-w-lg">
			{/* net */}
			<div className="absolute inset-x-4  h-8 bg-slate-600 rounded-sm z-50" />
			<div className="size-full bg-orange-500 border-white border-8 relative">
				{/* 3m line */}
				<div className="absolute h-2 inset-x-0 top-[33%] bg-white" />
				{/* Content */}
				<div className="grid grid-cols-3 grid-rows-2 size-full pt-8">
					{Array.from({ length: positions }, (_, index) => {
						return (
							<div
								className="size-full grid place-items-center z-10"
								key={index}
							>
								<button className="border-2 size-3/4 rounded-md bg-white/80 cursor-pointer hover:bg-white transition-colors">
									{index + 1}
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
