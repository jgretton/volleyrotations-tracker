interface FormProgressProps {
	step: number;
}

interface StepItemProps {
	stepData: {
		stepName: string;
	};
	currentStep: number;
	index: number;
}

type StepStatus = "completed" | "current" | "upcoming";

function StepItem({ stepData, currentStep, index }: StepItemProps) {
	const status: StepStatus =
		currentStep === index
			? "current"
			: currentStep > index
			? "completed"
			: "upcoming";

	const styles: Record<
		StepStatus,
		{ circle: string; text: string; connector: string }
	> = {
		completed: {
			circle: "bg-green-600 text-white",
			text: "text-green-600",
			connector: "bg-green-600",
		},
		current: {
			circle: "bg-amber-400 text-gray-800",
			text: "text-gray-900",
			connector: "bg-gray-300",
		},
		upcoming: {
			circle: "bg-gray-300 text-gray-300",
			text: "text-gray-400",
			connector: "bg-gray-300",
		},
	};

	return (
		<li className="grid grid-cols-[auto_1fr] items-center place-items-center gap-y-6 gap-x-4">
			<div
				className={`size-4 rounded-full flex items-center justify-center ${styles[status].circle}`}
			></div>

			<span
				className={`justify-self-start text-sm font-semibold ${styles[status].text}`}
			>
				{stepData.stepName}
			</span>

			{index < 2 && (
				<div
					className={`w-1 h-5 rounded-full ${styles[status].connector}`}
				></div>
			)}
		</li>
	);
}

const steps = [
	{ stepName: "Team Names" },
	{ stepName: "Players" },
	{ stepName: "Starting Lineup" },
];

export default function FormProgress({ step }: FormProgressProps) {
	return (
		<div className="w-fit p-10 ">
			<ul className="grid gap-y-6 ">
				{steps.map((stepData, index) => (
					<StepItem
						key={index}
						stepData={stepData}
						currentStep={step}
						index={index}
					/>
				))}
			</ul>
		</div>
	);
}
