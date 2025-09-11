"use client";
import { useState } from "react";
import FormProgress from "./FormProgress";
import { Card } from "@/components/ui/card";
import TeamNames from "./TeamNames";
import TeamPlayers from "./TeamPlayers";

export default function MultiStepForm() {
	const [step, setStep] = useState<number>(0);
	console.log(step);
	return (
		<div className="flex flex-row gap-16">
			<FormProgress step={step} />
			<Card className="flex-1 p-10">
				{(step === 0 && <TeamNames step={step} setStep={setStep} />) ||
					(step === 1 && <TeamPlayers step={step} setStep={setStep} />)}
			</Card>
		</div>
	);
}
