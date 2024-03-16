import Initilize from './components/Initilize';
import MidlOption from './components/MidlOption';
import MatrixCard from './components/MatrixCard';

export default function Home() {
	return (
		<main role='main'>
			<Initilize />
			<MatrixCard name="left" withNumberTab={ false }/>
			<MidlOption />
			<MatrixCard name="right" withNumberTab={ true }/>
		</main>
	)
}
