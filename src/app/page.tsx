import Initilize 	from "@/app/components/Initilize";
import MatrixCard 	from "@/app/components/MatrixCard";
import Operations 	from "@/app/components/Operations";
import Footer 		from "@/app/components/Footer/Footer";
import Result 		from "@/app/components/Result/Result";

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
