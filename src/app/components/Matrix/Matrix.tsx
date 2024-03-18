'use client'

import { useEffect, useState } from 'react';
import styles from './Matrix.module.css'

interface Props {
	name: string
}

export default function Matrix({ name }:Props) {
	let count = 0;
	const [matrix, setMatrix] = useState([] as number[][])

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(name) || '{}') as number[][];

		if (res) {
			setMatrix(res);
		}

	}, [localStorage.getItem(name)]);


	const handle = (y: number, x: number, value: number) => {
		const res = [...matrix];
		res[y][x] = value;
		setMatrix(res);
		localStorage.setItem(name, JSON.stringify(res));
	}

	return (
		<section style={{gridTemplateRows: `repeat(${matrix.length}, minmax(0, 1fr))`, gridTemplateColumns: `repeat(${matrix.length}, minmax(0, 1fr))`}} className={ styles.matrix }>
			{matrix.map((row, y) => row.map((num, x) =>
				<input key={ count++ } onChange={ event => handle(y, x, event.target.valueAsNumber) } type="number" value={ num }/>
			))}
		</section>
	)
}
