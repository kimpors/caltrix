'use client'

import { useEffect } from "react";

export default function Initilize() {
	useEffect(() => {
		localStorage.setItem("left", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
		localStorage.setItem("right", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
		localStorage.setItem("results", JSON.stringify(["hello", "there", "How are you"]));
		localStorage.setItem("value", JSON.stringify(0));
	}, [])

	return <></>;
}
