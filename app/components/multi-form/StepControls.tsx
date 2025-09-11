import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

export default function StepControls({
	step,
	setStep,
	isSubmitting,
}: {
	step: number;
	setStep: (step: number) => void;
	isSubmitting: boolean;
}) {
	const handlePrevStep = () => {
		if (step === 0) return;
		else setStep(step - 1);
	};
	return (
		<div className="col-span-2 grid w-full grid-cols-1 md:grid-cols-2 gap-10 ">
			<Button
				className="disabled:cursor-not-allowed cursor-pointer"
				disabled={isSubmitting || step === 0}
				onClick={handlePrevStep}
			>
				Previous
			</Button>
			<Button
				className="disabled:cursor-not-allowed cursor-pointer"
				disabled={isSubmitting || step === 2}
			>
				{isSubmitting ? (
					<Loader2Icon className="size-4 animate-spin" />
				) : (
					"Next"
				)}
			</Button>
		</div>
	);
}
