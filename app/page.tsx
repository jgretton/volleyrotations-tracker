import PlayerList from "./components/PlayerList";
import TeamForm from "./components/TeamForm";

export default function Home() {
	return (
		<div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<span>VolleyRotation Tracker</span>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
				<TeamForm teamType="home" />
				<TeamForm teamType="away" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
				<PlayerList teamType="home" />
				<PlayerList teamType="away" />
			</div>
		</div>
	);
}
