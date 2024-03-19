"use client"

import { useStateContext } from "./StateContext";
import Option from "./Option/Option";
import { Sum, Sub, Mul, MatrixString } from "../script";

enum Operation {
	SUM,
	SUB,
	MUL,
	SWAP,
}

export default function MidlOption() {
	const { isNumber, number, results, setResults, setLeft, setRight } = useStateContext();

	function handle(operation: Operation) {
		let left = JSON.parse(localStorage.getItem("left") || '{}') as number[][];
		let right = JSON.parse(localStorage.getItem("right") || '{}') as number[][];

		switch (operation) {
			case Operation.SUM:
				setResults([...results, MatrixString(Sum(left, right))]);
				break;

			case Operation.SUB:
				setResults([...results, MatrixString(Sub(left, right))]);
				break;

			case Operation.MUL:
				if (isNumber) {
					setResults([...results, MatrixString(Mul(left, number))]);
				} else {
					setResults([...results, MatrixString(Mul(left, right))]);
				}
				break;

			case Operation.SWAP:
				let temp = [...left];
				left = [...right];
				right = [...temp];

				setLeft(left);
				setRight(right);

				localStorage.setItem("left", JSON.stringify(left));
				localStorage.setItem("right", JSON.stringify(right));
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
