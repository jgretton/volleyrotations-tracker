"use client";
import { useState } from "react";
import FormProgress from "./FormProgress";

export default function MultiStepForm() {
	const [step, setStep] = useState<number>(0);
	return (
		<div className="flex flex-row">
			<FormProgress step={step} />
		</div>
	);
}
