'use client'

import MidlOption from './components/MidlOption';
import MatrixCard from './components/MatrixCard';

export default function Home() {
	localStorage.setItem("left", JSON.stringify(Array<Array<number>>(4).fill(Array(4).fill(0))));
	localStorage.setItem("right", JSON.stringify(Array<Array<number>>(4).fill(Array(4).fill(0))));
	localStorage.setItem("results", JSON.stringify(["hello", "there", "How are you"]));
	localStorage.setItem("value", JSON.stringify(0));

	return (
		<main role='main'>
			<MatrixCard name="left" withNumberTab={ false }/>
			<MidlOption />
			<MatrixCard name="right" withNumberTab={ true }/>
		</main>
	)
}
