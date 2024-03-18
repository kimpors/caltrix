"use client"

import { Determinant, Inverse } from '@/app/script';
import styles from './More.module.css';
import { useStateContext } from '../StateContext';

export default function More() {
	let matrix = JSON.parse(localStorage.getItem("left") || '{}') as number[][];

	const { results, setResults } = useStateContext();

	function handle(operation: string) {
		switch (operation) {
			case "det":
				setResults([...results, Determinant(matrix).toString()]);
				break;

			case 'rev':
				setResults([...results, Inverse(matrix).map(row => row.map(num => num.toFixed(3))).toString() ]);
				break;
		}
	}

	return (
		<section className={ styles.more }>
			<button onClick={ () => handle("det") } className="shadow">Determinant</button>
			<button onClick={ () => handle("rev") }>Reverse</button>
		</section>
	)
}
