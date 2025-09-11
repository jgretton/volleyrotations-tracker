"use client";
import { useState } from "react";
import StepControls from "./StepControls";
import PlayerList from "../PlayerList";
import { useMatchStore } from "@/store";
import PlayerTabsTest from "../PlayerTabsTest";

export default function TeamPlayers({
	step,
	setStep,
}: {
	step: number;
	setStep: (step: number) => void;
}) {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const homeTeamName = useMatchStore((state) => state.match.homeTeam.teamName);
	const awayTeamName = useMatchStore((state) => state.match.awayTeam.teamName);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		try {
			const formData = new FormData(event.currentTarget);
			// const homeTeamName = formData.get("homeTeamName") as string;
			// const awayTeamName = formData.get("awayTeamName") as string;

			await new Promise((resolve) => setTimeout(resolve, 1000));
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
			setStep(step + 1);
		}
	};

	return (
		<div className="w-full">
			<h2 className="font-semibold text-gray-800">Player Names</h2>
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
			>
				{/* <div className="">
					<h2 className="font-semibold text-gray-800 text-sm">
						{homeTeamName}
					</h2>
					<div className="mt-5">
						<PlayerList teamType="home" />
					</div>
				</div>
				<div className="">
					<h2 className="font-semibold text-gray-800 text-sm">
						{awayTeamName}
					</h2>
					<div className="mt-5">
						<PlayerList teamType="away" />
					</div>
				</div> */}
				<PlayerTabsTest />
				<StepControls
					isSubmitting={isSubmitting}
					step={step}
					setStep={setStep}
				/>
			</form>
		</div>
	);
}
