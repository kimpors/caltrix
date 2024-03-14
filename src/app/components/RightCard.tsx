'use client'

import { useState } from "react"
import Card from "./Card/Card";
import Matrix from "./Matrix/Matrix";
import Option from "./Option/Option";
import StatePool from 'state-pool';

const rightM = StatePool.createState(Array(4 * 4).fill(0));

export default function RightCard() {
	let count = 0;
	const [more, setMore] = useState(false);
	const [matrix, setMatrix] = useState(true);

	const [right, setRight] = StatePool.useState(rightM);

	const handle = (index: number, value: number) => {
		const res = [...right];
		res[index] = value;
		setRight(res);
	}

	return (
		<article className='container'>
			<section className='tab'>
				<button className='shadow' onClick={ () => setMore(!more)}>=</button>
				<button className='shadow' onClick={ () => setMatrix(true)}>M</button>
				<button className='shadow' onClick={ () => setMatrix(false)}>N</button>
			</section>

			{more
				? <Card><h1>More</h1></Card>
				: (
					<Card>
						{matrix
							? (
								<section className={ "matrix grid-cols-4"}>
									{right.map((num, i) => 
										<input key={ count++ } onChange={ event => { handle(i, event.target.valueAsNumber) }} type="number" value={ num }/>
									)}
								</section>

							)
							: <input type="number" value="hello" />
						}
						<Option className='flex-row mx-2 p-2 mt-6 w-full'>
							<button>+</button>
							<button onClick={() => console.log(right)}>clean</button>
							<button>-</button>
						</Option>
					</Card>
				)
			}
		</article>
	)
}
