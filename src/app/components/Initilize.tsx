'use client'

import { useEffect } from "react";

export default function Initilize() {
	useEffect(() => {
		if (!localStorage.getItem("left")) {
			localStorage.setItem("left", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
			localStorage.setItem("right", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
			localStorage.setItem("prev-theme", JSON.stringify("pink"));
		}
	}, [])

	return null;
}
