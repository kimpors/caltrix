"use client"

import { Determinant, Inverse } from '@/app/script';
import styles from './More.module.css';
import { useStateContext } from '../StateContext';

enum Operation {
	DET,
	REV
}

interface Props {
	matrix: number[][]
}

export default function More({ matrix }:Props) {
	const { results, setResults } = useStateContext();

	function handle(operation: Operation) {
		switch (operation) {
			case Operation.DET:
				setResults([...results, Determinant(matrix).toString()]);
				break;

			case Operation.REV:
				setResults([...results, Inverse(matrix).map(row => row.map(num => num.toFixed(3))).toString() ]);
				break;
		}
	}

	return (
		<section className={ styles.more }>
			<button onClick={ () => handle(Operation.DET) } className="shadow">Determinant</button>
			<button onClick={ () => handle(Operation.REV) }>Reverse</button>
		</section>
	)
}
