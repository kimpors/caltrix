'use client'

import styles 		from "./Controller.module.css";
import Option 		from "../Option/Option"
import { Cofactor } from "@/app/script";

interface Props {
	name: string
	matrix: number[][],
	setMatrix: (matrix: number[][]) => void
}

export default function Controller({ name, matrix, setMatrix }:Props) {

	function add() {
		if (matrix.length < 7) {
			let m = [...matrix];

			for (let y = 0; y < matrix.length; y++) {
				m[y].push(0);
			}

			m.push(Array(matrix.length + 1).fill(0));
			localStorage.setItem(name, JSON.stringify(m));
			setMatrix(m);
		}
	}

	function clear() {
		const m = [...matrix];

		for (let y = 0; y < m.length; y++) {
			for (let x = 0; x < m.length; x++) {
				m[y][x] = 0;
			}
		}

		localStorage.setItem(name, JSON.stringify(matrix));
		setMatrix(m);
	}

	function sub() {
		if (matrix.length > 2) {
			let m = Cofactor(matrix, matrix.length - 1, matrix.length - 1)
			localStorage.setItem(name, JSON.stringify(m));
			setMatrix(m);
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
