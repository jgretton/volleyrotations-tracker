"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMatchStore } from "@/store";
import { useState } from "react";
import StepControls from "./StepControls";

export default function TeamNames({
	step,
	setStep,
}: {
	step: number;
	setStep: (step: number) => void;
}) {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const setTeamNames = useMatchStore((state) => state.setTeamNames);
	const homeTeamDefaultName = useMatchStore(
		(state) => state.match.homeTeam.teamName
	);
	const awayTeamDefaultName = useMatchStore(
		(state) => state.match.awayTeam.teamName
	);
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		try {
			const formData = new FormData(event.currentTarget);
			const homeTeamName = formData.get("homeTeamName") as string;
			const awayTeamName = formData.get("awayTeamName") as string;

			await new Promise((resolve) => setTimeout(resolve, 1000));

			setTeamNames(homeTeamName, awayTeamName);
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
			setStep(step + 1);
		}
	};
	return (
		<div className="w-full">
			<h2 className="font-semibold text-gray-800">Team Names</h2>
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5"
			>
				<div className="flex gap-2 flex-col">
					<Label htmlFor="homeTeamName">Home Team</Label>
					<Input
						required
						name="homeTeamName"
						defaultValue={homeTeamDefaultName}
					/>
				</div>
				<div className="flex gap-2 flex-col">
					<Label htmlFor="awayTeamName">Away Team</Label>
					<Input
						required
						name="awayTeamName"
						defaultValue={awayTeamDefaultName}
					/>
				</div>
				<StepControls
					isSubmitting={isSubmitting}
					setStep={setStep}
					step={step}
				/>
			</form>
		</div>
	);
}
