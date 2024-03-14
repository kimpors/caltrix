import { useEffect, useState } from 'react';
import styles from './Matrix.module.css'

interface Props {
	name: string
	size: number
}

export default function Matrix({ name, size }:Props) {
	const [left, setLeft] = useState([] as number[]);

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(name) || '{}') as number[][];

		if (res) {
			setLeft(res.flat());
		}
	}, [])

	const handle = (index: number, value: number) => {
		const res = [...left];
		res[index] = value;
		setLeft(res);
	}

	return (
		<section className={ styles.matrix + " grid-cols-4"}>
			{left.map((num, i) => 
				<input key={ i } onChange={ event => { handle(i, event.target.valueAsNumber) }} type="number" value={ num }/>
			)}
		</section>
	)
}
