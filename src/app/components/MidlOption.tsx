"use client"

import { useStateContext } from "./StateContext";
import Option from "./Option/Option";
import { Sum, Sub, Mul } from "../script";

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

		const l = JSON.stringify(left);
		const r = JSON.stringify(right);
		let o = "";
		let res = "";

		switch (operation) {
			case Operation.SUM:
				o = "+";
				res = JSON.stringify(Sum(left, right));
				setResults([...results, {left: l, right: r, operation: o, result: res}])
				break;

			case Operation.SUB:
				o = "-";
				res = JSON.stringify(Sub(left, right));
				setResults([...results, {left: l, right: r, operation: o, result: res}])
				break;

			case Operation.MUL:
				o = "*";

				if (isNumber) {
					res = JSON.stringify(Mul(left, number));
				} else {
					res = JSON.stringify(Mul(left, right));
				}

				setResults([...results, {left: l, right: isNumber ? number : r, operation: o, result: res}])
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
				<button onClick={() => handle(Operation.SWAP)}>swap</button>
				<button onClick={() => handle(Operation.SUM)}>+</button>
				<button onClick={() => handle(Operation.SUB)}>-</button>
			</>
			: <></>
			}
			<button onClick={() => handle(Operation.MUL)}>*</button>
		</Option>
	)
}
