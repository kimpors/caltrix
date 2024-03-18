'use client'

import Initilize from './components/Initilize';
import MidlOption from './components/MidlOption';
import MatrixCard from './components/MatrixCard';
import Footer from './components/Footer/Footer';
import Result from './components/Result/Result';

export default function Home() {
	return (
		<>
			<main role='main'>
				<Initilize />
				<MatrixCard name="left" withNumberTab={ false } />
				<MidlOption />
				<MatrixCard name="right" withNumberTab={ true } />
			</main>
			<Footer>
				<h1>Results</h1>
				<Result />
			</Footer>
		</>
	)
}
