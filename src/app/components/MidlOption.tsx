"use client"

import Option from "./Option/Option";
import { Sum, Sub, Mul } from "../script";

import { useStateContext } from "./StateContext";
import { useRouter } from "next/navigation";

enum Operation {
	SUM,
	SUB,
	MUL,
	SWAP,
}

export default function MidlOption() {
	const router = useRouter();
	const { isNumber, number, results, setResults } = useStateContext();

	function handle(operation: Operation) {
		let left = JSON.parse(localStorage.getItem("left") || '{}') as number[][];
		let right = JSON.parse(localStorage.getItem("right") || '{}') as number[][];

		switch (operation) {
			case Operation.SUM:
				setResults([...results, Sum(left, right).toString()]);
				break;

			case Operation.SUB:
				setResults([...results, Sub(left, right).toString()]);
				break;

			case Operation.MUL:
				if (isNumber) {
					setResults([...results, Mul(left, number).toString()]);
				} else {
					setResults([...results, Mul(left, right).toString()]);
				}
				break;

			case Operation.SWAP:
				let temp = [...left];
				left = [...right];
				right = [...temp];

				localStorage.setItem("left", JSON.stringify(left));
				localStorage.setItem("right", JSON.stringify(right));
				router.refresh();
				break;
		}
	}

	return(
		<Option className="flex-col p-5">
			{!isNumber 
			? 
			<> 
				<button onClick={() => handle(Operation.SUM)}>+</button>
				<button onClick={() => handle(Operation.SUB)}>-</button>
				<button onClick={() => handle(Operation.SWAP)}>swap</button>
			</>
			: <></>
			}
			<button onClick={() => handle(Operation.MUL)}>*</button>
		</Option>
	)
}
