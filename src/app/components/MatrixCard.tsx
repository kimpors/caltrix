'use client'

import { useState } from "react"
import Card from "./Card/Card"
import More from "./More/More"
import Matrix from "./Matrix/Matrix"
import Controller from "./Controller/Controller"

interface Props {
	name: string
	withNumberTab: boolean
}

export default function MatrixCard({ name, withNumberTab }:Props) {
	const [more, setMore] = useState(false);
	const [number, setNumber] = useState(false);
	const [value, setValue] = useState(0);

	return (
		<article className="container">
			<section className='tab'>
				<button className='shadow' onClick={ () => setMore(!more)}>=</button>
				{withNumberTab && 
					<>
						<button className='shadow' onClick={ () => setNumber(false)}>M</button>
						<button className='shadow' onClick={ () => setNumber(true)}>N</button>
					</>
				}
			</section>
			
			<Card>
				{more
					? <More matrixName={name}/>
					: (
						<>
							{number
								? <input onChange={ event => { setValue(event.target.valueAsNumber) }} type="number" value={ value } />
	 							: <Matrix name="right" size={4}/>
							}
							<Controller name={ name }/>
						</>
					)
				}
			</Card>
		</article>
	)
}
