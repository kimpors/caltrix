'use client'

import { useEffect } from "react";
import { useStateContext } from "./StateContext";

export default function Initilize() {
	const { setLeft, setRight } = useStateContext();

	useEffect(() => {
		if (!localStorage.getItem("left")) {
			localStorage.setItem("left", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
			localStorage.setItem("right", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
		}

		setLeft(JSON.parse(localStorage.getItem("left") || "[]") as number[][])
		setRight(JSON.parse(localStorage.getItem("right") || "[]") as number[][])
	}, [setLeft, setRight])

	return null;
}
