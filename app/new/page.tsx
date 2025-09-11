import MultiStepForm from "../components/multi-form/MultiStepForm";

export default function NewPage() {
	return (
		<div className="bg-gray-50 min-h-screen">
			<h1 className="text-center font-semibold text-lg/10 text-gray-800 mt-10">
				New match details
			</h1>

			<div className="max-w-7xl mx-auto mt-20">
				<MultiStepForm />
			</div>
		</div>
	);
}
