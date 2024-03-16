import styles from './More.module.css';

interface Props {
	matrixName: string
}

export default function More({ matrixName }:Props) {
	let matrix = JSON.parse(localStorage.getItem(matrixName) || '{}') as number[][];
	let other = [] as number[][];

	const otherName = matrixName == "left" ? "right" : "left";
	other = JSON.parse(localStorage.getItem(otherName) || '{}') as number[][];

	function swap() {
		let temp = [...other];

		console.log("other prev", temp)

		other = [...matrix];
		matrix = [...temp];

		localStorage.setItem(matrixName, JSON.stringify(matrix));
		localStorage.setItem(otherName, JSON.stringify(other));

		console.log("matrix", matrix);
		console.log("other", other);
	}


	return (
		<section className={ styles.more }>
			<button className="shadow">Determinant</button>
			<button>Reverse</button>
			<button onClick={ () => swap() }>Swap</button>
			<button>From Json</button>
		</section>
	)
}
