'use client'

import Card from './components/Card'
import Option from './components/Option'
import Matrix from './components/Matrix'
import { useState } from 'react';

export default function Home() {
	let [moreA, setMoreA] = useState(false);
	let [moreB, setMoreB] = useState(false);
	let [matrix, setMatrix] = useState(true);

	return (
		<article className="main">
			<article className='container'>
				<section className='tab'>
					<button className='top-radius shadow' type="button" onClick={ () => setMoreA(!moreA)}>=</button>
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
					<button className='top-radius shadow' type="button" onClick={ () => setMoreB(!moreB)}>=</button>
					<button className='top-radius shadow' type="button" onClick={ () => setMatrix(true)}>M</button>
					<button className='top-radius shadow' type="button" onClick={ () => setMatrix(false)}>N</button>
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
