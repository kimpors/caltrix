import Initilize from './components/Initilize';
import MatrixCard from './components/MatrixCard';
import Footer from './components/Footer/Footer';
import Result from './components/Result/Result';
import Operations from './components/Operations';

export default function Home() {
	return (
		<>
			<main role='main'>
				<Initilize />
				<MatrixCard name="left" withNumberTab={ false } />
				<Operations />
				<MatrixCard name="right" withNumberTab={ true } />
			</main>
			<Footer>
				<h1>Results</h1>
				<Result />
			</Footer>
		</>
	)
}
