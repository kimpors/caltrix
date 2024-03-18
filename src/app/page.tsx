'use client'

import Initilize from './components/Initilize';
import MidlOption from './components/MidlOption';
import MatrixCard from './components/MatrixCard';
import Footer from './components/Footer/Footer';
import Result from './components/Result/Result';
import { useState } from 'react';

export default function Home() {
	const [isNumber, setIsNumber] = useState(false);
	const [results, setResults] = useState([] as string[]);

	return (
		<>
			<main role='main'>
				<Initilize />
				<MatrixCard name="left" withNumberTab={ false } isNumber={ false } setIsNumber={ () => { return null; }} results={ results } setResults={ setResults } />
				<MidlOption isNumber={ isNumber } number={0} results={ results } setResults={ setResults } />
				<MatrixCard name="right" withNumberTab={ true } isNumber={ isNumber } setIsNumber={ setIsNumber } results={ results } setResults={ setResults }/>
			</main>
			<Footer>
				<h1>Results</h1>
				<Result results={ results } setResults={ setResults } />
			</Footer>
		</>
	)
}
