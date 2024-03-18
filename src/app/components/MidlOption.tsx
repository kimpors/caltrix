"use client"

import Option from "./Option/Option";
import { Sum, Sub, Mul } from "../script";

interface Props {
	number: number,
	results: string[]
	isNumber: boolean
	setResults: (results: string[]) => void
}

export default function MidlOption({ isNumber, number, results, setResults }:Props) {

	function handle(operation: string) {
		const left = JSON.parse(localStorage.getItem("left") || '{}') as number[][];
		const right = JSON.parse(localStorage.getItem("right") || '{}') as number[][];

		switch (operation) {
			case "sum":
				setResults([...results, Sum(left, right).toString()]);
				break;

			case 'sub':
				setResults([...results, Sub(left, right).toString()]);
				break;

			case 'mul':
				if (isNumber) {
					setResults([...results, Mul(left, JSON.parse(localStorage.getItem("number") || "0") as number).toString()]);
				} else {
					setResults([...results, Mul(left, right).toString()]);
				}
				break;
		}
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
