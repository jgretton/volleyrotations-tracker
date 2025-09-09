"use client";

import { useMatchStore } from "@/store";

export default function ResetButton() {
	const resetMatch = useMatchStore((state) => state.resetMatch);
	return <button onClick={resetMatch}> Reset Data</button>;
}
