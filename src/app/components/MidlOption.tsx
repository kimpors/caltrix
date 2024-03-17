"use client"

import Option from "./Option/Option";
import { Sum, Sub, Mul } from "../script";
import { useRouter } from "next/navigation";

export default function MidlOption() {
	const router = useRouter();

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
				results.push(Mul(left, right).toString());
				break;
		}

		localStorage.setItem("results", JSON.stringify(results));
		router.refresh();
	}

	return(
		<Option className="flex-col p-5">
			<button onClick={() => {handle("sum")}}>+</button>
			<button onClick={() => {handle("sub")}}>-</button>
			<button onClick={() => {handle("mul")}}>*</button>
		</Option>
	)
}
