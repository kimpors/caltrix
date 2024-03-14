import { useEffect, useState } from 'react';
import styles from './Matrix.module.css'

interface Props {
	name: string
	size: number
}

export default function Matrix({ name, size }:Props) {
	let count = 0;
	const [left, setLeft] = useState([] as number[][]);

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(name) || '{}') as number[][];

		if (res) {
			setLeft(res);
		}
	}, [])

	const handle = (y: number, x: number, value: number) => {
		const res = [...left];
		res[y][x] = value;
		setLeft(res);
		localStorage.setItem(name, JSON.stringify(res));
	}

	return (
		<section className={ styles.matrix + " grid-cols-4"}>
			{left.map((row, y) => row.map((num, x) =>
				<input key={ count++ } onChange={ event => { handle(y, x, event.target.valueAsNumber) }} type="number" value={ num }/>
			))}
		</section>
	)
}
