import MockCourt from "../components/MockCourt";

export default function MatchPage() {
	return (
		<div className="max-w-7xl mx-auto p-10 flex justify-center w-full ">
			<h1 className="text-lg font-semibold text-gray-700 text-center">
				Match View
			</h1>

			<div className="mt-20 grid grid-cols-2 w-full gap-5">
				<MockCourt netSide="right" />
				<MockCourt netSide="left" />
			</div>
		</div>
	);
}
