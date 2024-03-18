"use client"

import Option from "./Option/Option";
import { Sum, Sub, Mul } from "../script";

import { useStateContext } from "./StateContext";

export default function MidlOption() {
	const { isNumber, number, results, setResults } = useStateContext();

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
					setResults([...results, Mul(left, number).toString()]);
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
