"use client"

import styles 					from './More.module.css';
import { useStateContext } 		from '../StateContext';
import { Determinant, Inverse } from '@/app/script';

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
				setResults([...results, { left: JSON.stringify(matrix), result: JSON.stringify(Determinant(matrix)) }]);
				break;

			case Operation.REV:
				setResults([...results, { left: JSON.stringify(matrix), result: JSON.stringify(Inverse(matrix).map(row => row.map(num => Number(num.toFixed(3))))) }]);
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
