'use client'

import Initilize from './components/Initilize';
import MidlOption from './components/MidlOption';
import MatrixCard from './components/MatrixCard';
import Footer from './components/Footer/Footer';
import Result from './components/Result/Result';
import { useState } from 'react';

export default function Home() {
	const [isNumber, setIsNumber] = useState(false);

	return (
		<>
			<main role='main'>
				<Initilize />
				<MatrixCard name="left" withNumberTab={ false } isNumber={ false } setIsNumber={ () => { return null; } }/>
				<MidlOption isNumber={ isNumber } setIsNumber={ setIsNumber } />
				<MatrixCard name="right" withNumberTab={ true } isNumber={ isNumber } setIsNumber={ setIsNumber }/>
			</main>
			<Footer>
				<h1>Results</h1>
				<Result />
			</Footer>
		</>
	)
}
