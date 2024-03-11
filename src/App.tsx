import Card from './components/Card.tsx'
import Option from './components/Option.tsx'
import Matrix from './components/Matrix.tsx'
import { useState } from 'react';

export default function App() {
	let [moreA, setMoreA] = useState(false);
	let [moreB, setMoreB] = useState(false);
	let [matrix, setMatrix] = useState(true);




	return (
		<article className="main">
			<article className='container'>
				<section className='tab'>
					<input className='top-radius shadow' type="button" value="="  onClick={ () => setMoreA(!moreA) }/>
				</section>
				{moreA 
					? <Card><h1>More</h1></Card>
					: <Card><Matrix size={4}/></Card> 
				}
			</article>
		
			<Option className='flex-col p-5'>
				<button type="button">+</button>
				<button type="button">-</button>
				<button type="button">*</button>
				<button type="button">^</button>
			</Option>
			<article className='container'>
				<section className='tab'>
					<input className='top-radius shadow' type="button" value="=" onClick={ () => setMoreB(!moreB) } />
					<input className='top-radius shadow' type="button" value="M" onClick={ () => setMatrix(true) } />
					<input className='top-radius shadow' type="button" value="N" onClick={ () => setMatrix(false) }/>
				</section>

				{moreB
					? <Card><h1>More</h1></Card>
					: (
						<Card>
							{matrix
								? <Matrix size={4}/>
								: <input type="number" value="hello" />
							}
							<Option className='flex-row mx-2 p-2'>
								<button type="button">+</button>
								<button type="button">clean</button>
								<button type="button">-</button>
							</Option>
						</Card>
					)
				}
			</article>
		</article>
	)
}
