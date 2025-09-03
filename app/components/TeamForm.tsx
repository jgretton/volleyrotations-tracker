"use client";

import { useMatchStore } from "@/store";
import { LoaderCircleIcon } from "lucide-react";
import { useState } from "react";

interface TeamFormProps {
	teamType: "home" | "away";
}

export default function TeamForm({ teamType }: TeamFormProps) {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const match = useMatchStore((state) => state.match);
	const setTeamName = useMatchStore((state) => state.setTeamName);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);

		try {
			const formData = new FormData(event.currentTarget);
			const teamName = formData.get("teamName") as string;
			// add delay to simulate server delay.
			await new Promise((resolve) => setTimeout(resolve, 1000)); // this line needs to be after formdata.get() otherwise it throws errors.
			setTeamName(teamType, teamName);
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};
	const { homeTeam, awayTeam } = match;
	return (
		<form className="grid gap-3 w-full" onSubmit={handleSubmit}>
			<span className="font-semibold text-lg">
				{teamType === "home" ? "Home Team" : "Away Team"}
			</span>
			<label className="grid gap-1" htmlFor="teamName">
				<span className="text-sm font-medium">Team Name</span>
				<input
					type="text"
					defaultValue={
						teamType === "home" ? homeTeam.teamName : awayTeam.teamName
					}
					className="rounded-md p-2 border border-gray-200 disabled:opacity-45 disabled:cursor-not-allowed w-full"
					name="teamName"
					id="teamName"
					disabled={isSubmitting}
				/>
			</label>

			<button
				className="rounded-md bg-violet-600 text-white py-2 px-2 font-medium hover:bg-violet-700 cursor-pointer focus:outline-2 focus:outline-violet-700 focus: outline-offset-2 disabled:bg-violet-400 disabled:cursor-not-allowed grid place-items-center"
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<span className="flex items-center gap-2">
						<LoaderCircleIcon className="size-3 animate-spin" /> Submitting...
					</span>
				) : (
					"Submit"
				)}
			</button>
		</form>
	);
}
