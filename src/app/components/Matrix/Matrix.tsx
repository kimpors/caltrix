'use client'

import styles from './Matrix.module.css'

interface Props {
	name: string
	matrix: number[][]
	setMatrix: (matrix: number[][]) => void
}

export default function Matrix({ name, matrix, setMatrix }:Props) {
	let count = 0;

	const handle = (y: number, x: number, value: number) => {
		let m = [...matrix];
		m[y][x] = value;
		localStorage.setItem(name, JSON.stringify(m));
		setMatrix(m);
	}

	return (
		<section style={{gridTemplateRows: `repeat(${matrix.length}, minmax(0, 1fr))`, gridTemplateColumns: `repeat(${matrix.length}, minmax(0, 1fr))`}} className={ styles.matrix }>
			{matrix.map((row, y) => row.map((num, x) =>
				<input key={ count++ } onChange={ event => handle(y, x, event.target.valueAsNumber) } type="number" value={ num }/>
			))}
		</section>
	)
}
