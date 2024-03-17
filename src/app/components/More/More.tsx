"use client"

import { Determinant } from '@/app/script';
import styles from './More.module.css';
import { useRouter } from 'next/navigation';

interface Props {
	matrixName: string
}

export default function More({ matrixName }:Props) {
	const router = useRouter();
	let matrix = JSON.parse(localStorage.getItem(matrixName) || '{}') as number[][];
	let other = [] as number[][];



	const otherName = matrixName == "left" ? "right" : "left";
	other = JSON.parse(localStorage.getItem(otherName) || '{}') as number[][];

	function swap() {
		let temp = [...other];
		other = [...matrix];
		matrix = [...temp];

		localStorage.setItem(matrixName, JSON.stringify(matrix));
		localStorage.setItem(otherName, JSON.stringify(other));
		router.refresh();
	}

	return (
		<section className={ styles.more }>
			<button onClick={ () => console.log("det", Determinant(matrix))} className="shadow">Determinant</button>
			<button>Reverse</button>
			<button onClick={ () => swap() }>Swap</button>
		</section>
	)
}
