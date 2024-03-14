'use client'

import { useState } from "react"
import Card from "./Card/Card";
import Matrix from "./Matrix/Matrix";
import Option from "./Option/Option";
import StatePool from "state-pool";

const leftM = StatePool.createState(Array<number>(4 * 4).fill(0));

export default function LeftCart() {
	let count = 0;
	const [more, setMore] = useState(false);
	const [left, setLeft] = StatePool.useState(leftM);

	const handle = (index: number, value: number) => {
		const res = [...left];
		res[index] = value;
		setLeft(res);
	}

	return(
		<article className='container'>
			<section className='tab'>
				<button className='shadow' onClick={ () => setMore(!more)}>=</button>
			</section>
			{more 
				? <Card><h1>More</h1></Card>
				: (
					<Card>
						<section className={"matrix grid-cols-4"}>
							{left.map((num, i) => 
								<input key={ count++ } onChange={ event => { handle(i, event.target.valueAsNumber) }} type="number" value={ num }/>
							)}
						</section>

						<Option className='flex-row mx-2 p-2 mt-6 w-full'>
							<button>+</button>
							<button onClick={() => console.log(left)}>clean</button>
							<button>-</button>
						</Option>
					</Card> 
				) 
			}
		</article>
	)
}
