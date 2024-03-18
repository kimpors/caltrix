'use client'

import { Cofactor } from "@/app/script";
import styles from "./Controller.module.css";
import Option from "../Option/Option"
import { useRouter } from "next/navigation";

interface Props {
	name: string
}

export default function Controller({ name }:Props) {
	const router = useRouter();
	let matrix = JSON.parse(localStorage.getItem(name) || '{}') as number[][];

	function add() {
		if (matrix.length < 7) {
			let m = [...matrix];

			for (let y = 0; y < matrix.length; y++) {
				m[y].push(0);
			}

			m.push(Array(matrix.length + 1).fill(0));

			// setMatrix(m);
			
			localStorage.setItem(name, JSON.stringify(m));
			router.refresh();
		}
	}

	function clear() {
		for (let y = 0; y < matrix.length; y++) {
			for (let x = 0; x < matrix.length; x++) {
				matrix[y][x] = 0;
			}
		}

		localStorage.setItem(name, JSON.stringify(matrix));
		router.refresh();
	}

	function sub() {
		if (matrix.length > 2) {
			matrix = Cofactor(matrix, matrix.length - 1, matrix.length - 1)
			localStorage.setItem(name, JSON.stringify(matrix));
			// setMatrix(matrix);
			router.refresh();
		}
	}

	return (
		<Option className={ styles.controller }>
			<button onClick={ () => add() }>+</button>
			<button onClick={ () => clear() }>clear</button>
			<button onClick={ () => sub() }>-</button>
		</Option>
	)
}
