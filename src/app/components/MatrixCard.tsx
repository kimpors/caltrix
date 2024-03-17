'use client'

import { useEffect, useState } from "react"
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

	useEffect(() => {
		localStorage.setItem("number", JSON.stringify(value));
	}, [value])

	function handle(isNumber: boolean) {
		setNumber(isNumber);
		localStorage.setItem("isNumber", JSON.stringify(true));
	}

	return (
		<article className="container">
			<section className='tab'>
				<button className='shadow' onClick={ () => setMore(!more)}>=</button>
				{withNumberTab && 
					<>
						<button className='shadow' onClick={ () => handle(false) }>M</button>
						<button className='shadow' onClick={ () => handle(true) }>N</button>
					</>
				}
			</section>
			<Card>
				{more
					? <More matrixName={name}/>
					: (
						<>
							{number
								? <input style={{backgroundColor: "var(--primary)"}} onChange={ event => setValue(event.target.valueAsNumber) } type="number" value={ value } />
	 							: 
								<> 
									<Matrix name={ name } />
									<Controller name={ name }/>
								</> 
							}
						</>
					)
				}
			</Card>
		</article>
	)
}
