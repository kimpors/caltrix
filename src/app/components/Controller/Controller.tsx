'use client'

import styles from "./Controller.module.css";
import Option from "../Option/Option"
import { useRouter } from "next/navigation";

interface Props {
	name: string
}

export default function Controller({ name }:Props) {
	const router = useRouter();
	const matrix = JSON.parse(localStorage.getItem(name) || '{}') as number[][];

	function add() {
		
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
		
	}

	return (
		<Option className={ styles.controller }>
			<button onClick={ () => add() }>+</button>
			<button onClick={ () => clear() }>clear</button>
			<button onClick={ () => sub() }>-</button>
		</Option>
	)
}
