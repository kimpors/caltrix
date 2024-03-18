"use client"

import { Determinant, Inverse } from '@/app/script';
import styles from './More.module.css';
import { useRouter } from 'next/navigation';

interface Props {
	name: string
	swapTo: string
}

export default function More({ name, swapTo }:Props) {
	const router = useRouter();
	let matrix = JSON.parse(localStorage.getItem(name) || '{}') as number[][];
	let other = JSON.parse(localStorage.getItem(swapTo) || '{}') as number[][];

	function swap() {
		let temp = [...other];
		other = [...matrix];
		matrix = [...temp];

		localStorage.setItem(name, JSON.stringify(matrix));
		localStorage.setItem(swapTo, JSON.stringify(other));
		router.refresh();
	}

	function handle(operation: string) {
		let results = JSON.parse(localStorage.getItem("results") || '{}') as string[];

		switch (operation) {
			case "det":
				results.push(Determinant(matrix).toString());
				break;

			case 'rev':
				results.push(Inverse(matrix).map(row => row.map(num => num.toFixed(3))).toString());
				break;
		}

		localStorage.setItem("results", JSON.stringify(results));
		router.refresh();
	}

	return (
		<section className={ styles.more }>
			<button onClick={ () => handle("det") } className="shadow">Determinant</button>
			<button onClick={ () => handle("rev") }>Reverse</button>
			<button onClick={ () => swap() }>Swap</button>
		</section>
	)
}
