import TeamForm from "./components/TeamForm";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<span>VolleyRotation Tracker</span>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-lg">
				<TeamForm teamType="home" />
				<TeamForm teamType="away" />
			</div>
		</div>
	);
}
