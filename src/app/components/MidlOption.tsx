"use client"

import Option from "./Option/Option";
import { Sum, Sub, Mul } from "../script";

export default function MidlOption() {
	function sum() {
		const left = JSON.parse(localStorage.getItem("left") || '{}') as number[][];
		const right = JSON.parse(localStorage.getItem("right") || '{}') as number[][];

		console.log("sum", Sum(left, right));
	}

	function sub() {
		const left = JSON.parse(localStorage.getItem("left") || '{}') as number[][];
		const right = JSON.parse(localStorage.getItem("right") || '{}') as number[][];

		console.log("sub", Sub(left, right));
	}

	function mul() {
		const left = JSON.parse(localStorage.getItem("left") || '{}') as number[][];
		const right = JSON.parse(localStorage.getItem("right") || '{}') as number[][];

		console.log("mul", Mul(left, right));
	}

	return(
		<Option className="flex-col p-5">
			<button onClick={() => {sum()}}>+</button>
			<button onClick={() => {sub()}}>-</button>
			<button onClick={() => {mul()}}>*</button>
		</Option>
	)
}
