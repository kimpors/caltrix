'use client'

import { useState } from "react"
import Card from "./Card/Card";
import Matrix from "./Matrix/Matrix";
import Option from "./Option/Option";

export default function RightCard() {
	const [more, setMore] = useState(false);
	const [matrix, setMatrix] = useState(true);

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
							? <Matrix size={4}/>
							: <input type="number" value="hello" />
						}
						<Option className='flex-row mx-2 p-2'>
							<button>+</button>
							<button>clean</button>
							<button>-</button>
						</Option>
					</Card>
				)
			}
		</article>
	)
}
