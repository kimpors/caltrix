import styles from './Matrix.module.css'

interface Props {
	array: number[][]
	set: (array: number[][]) => void
}

export default function Matrix({ array, set }:Props) {
	let count = 0;

	function handle(y: number, x:number, value: number) {
		const temp = array.map((row, i) => row.map((num, j) => {
			if (i === y && x === j) {
				return value;
			} else {
				return array[i][j];
			}
		}))

		set(temp);
	  }

	return (
		<section className={ styles.matrix + " grid-cols-" + array.length}>
			{array.map((row, i) => row.map((num, j) => 
				<input key={ count++ } onChange={ event => handle(i, j, event.target.valueAsNumber) } type="number" value={ num }/>
			))}
		</section>
	)
}
