'use client'

import { useEffect } 		from "react";
import { useTheme } 		from "next-themes";
import { useStateContext } 	from "@/app/components/StateContext";

export default function Initilize() {
	const { setTheme } = useTheme();
	const { setLeft, setRight } = useStateContext();

	function createMatrix(): Array<Array<number>>
	{
		return Array<Array<number>>(3).fill(Array(3).fill(0));
	}

	useEffect(() => {
		if (!localStorage.getItem("left")) {
			localStorage.setItem("left", JSON.stringify(createMatrix()));
			localStorage.setItem("right", JSON.stringify(createMatrix()));
			setTheme("pink");
		}

		setLeft(JSON.parse(localStorage.getItem("left") || "[]") as number[][])
		setRight(JSON.parse(localStorage.getItem("right") || "[]") as number[][])
	}, [setLeft, setRight])

	return null;
}
