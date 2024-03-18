"use client"

import Option from "./Option/Option";
import { Sum, Sub, Mul } from "../script";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Props {
	isNumber: boolean
	setIsNumber: (isNumber: boolean) => void
}

export default function MidlOption({ isNumber, setIsNumber }:Props) {
	const router = useRouter();
	// const [number, setNumber] = useState(isNumber);

	// useEffect(() => {
	// 	// setNumber(JSON.parse(localStorage.getItem("isNumber") || "false") as boolean)
	// 	// setNumber(!is);
	// 	// setIsNumber(!isNumber);
	// }, [isNumber])

	function handle(operation: string) {
		let results = JSON.parse(localStorage.getItem("results") || '{}') as string[];
		const left = JSON.parse(localStorage.getItem("left") || '{}') as number[][];
		const right = JSON.parse(localStorage.getItem("right") || '{}') as number[][];

		switch (operation) {
			case "sum":
				results.push(Sum(left, right).toString());
				break;

			case 'sub':
				results.push(Sub(left, right).toString());
				break;

			case 'mul':
				if (isNumber) {
					results.push(Mul(left, JSON.parse(localStorage.getItem("number") || "0") as number).toString());
				} else {
					results.push(Mul(left, right).toString());
				}
				break;
		}

		localStorage.setItem("results", JSON.stringify(results));
		router.refresh();
	}

	return(
		<Option className="flex-col p-5">
			{!isNumber 
			? 
			<> 
				<button onClick={() => handle("sum")}>+</button>
				<button onClick={() => handle("sub")}>-</button>
			</>
			: <></>
			}
			<button onClick={() => handle("mul")}>*</button>
		</Option>
	)
}
