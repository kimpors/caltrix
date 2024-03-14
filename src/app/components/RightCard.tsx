'use client'

import { useEffect, useState } from "react"
import Card from "./Card/Card";
import Matrix from "./Matrix/Matrix";
import Option from "./Option/Option";

export default function RightCard() {
	const [more, setMore] = useState(false);
	const [matrix, setMatrix] = useState(true);
	const [value, setValue] = useState(0);

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem("value") || '{}') as number;

		if (res) {
			setValue(value);
		}
	}, [])

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
							? <Matrix name="right" size={4}/>
							: <input onChange={ event => { setValue(event.target.valueAsNumber) }} type="number" value={ value } />
						}
						<Option className='flex-row mx-2 p-2 mt-6 w-full'>
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
