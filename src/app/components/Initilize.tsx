'use client'

import { useEffect } from "react";
import { useStateContext } from "./StateContext";
import { useTheme } from "next-themes";

export default function Initilize() {
	const { setTheme } = useTheme();
	const { setLeft, setRight } = useStateContext();


	useEffect(() => {
		if (!localStorage.getItem("left")) {
			localStorage.setItem("left", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
			localStorage.setItem("right", JSON.stringify(Array<Array<number>>(3).fill(Array(3).fill(0))));
			setTheme("pink");
		}

		setLeft(JSON.parse(localStorage.getItem("left") || "[]") as number[][])
		setRight(JSON.parse(localStorage.getItem("right") || "[]") as number[][])
	}, [setLeft, setRight])

	return null;
}
