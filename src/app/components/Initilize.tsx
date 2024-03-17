'use client'

import { useEffect } from "react";

export default function Initilize() {
	useEffect(() => {
		if (localStorage.getItem("left")) {
			return;
		}

		localStorage.setItem("left", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
		localStorage.setItem("right", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
		localStorage.setItem("results", JSON.stringify(["hello", "there", "hey", "hey", "hey", "How are you"]));
		localStorage.setItem("value", JSON.stringify(0));
	}, [])

	return <></>;
}
