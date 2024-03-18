"use client"

import { useState } from "react"
import Card from "./Card/Card"
import More from "./More/More"
import Matrix from "./Matrix/Matrix"
import Controller from "./Controller/Controller"
import { useStateContext } from "./StateContext"

interface Props {
	name: string
	withNumberTab: boolean
}

export default function MatrixCard({ name, withNumberTab }:Props) {
	const [isMore, setIsMore] = useState(false);
	const { number, setNumber, isNumber, setIsNumber, results, setResults } = useStateContext();

	return (
		<article className="container">
			<section className='tab'>
				<button style={isMore ? {} : {filter: "brightness(90%)"}}className='shadow' onClick={ () => setIsMore(!isMore)}>=</button>
				{withNumberTab && 
					<>
						<button style={isNumber ? {filter: "brightness(90%)"} : {}} className='shadow' onClick={ () => setIsNumber(false) }>M</button>
						<button style={isNumber ? {} : {filter: "brightness(90%)"}} className='shadow' onClick={ () => setIsNumber(true) }>N</button>
					</>
				}
			</section>
			<Card>
				{isMore
					? <More name={ name } swapTo={ name === "left" ? "right" : "left" } results={ results } setResults={ setResults }/>
					: (
						<>
							{withNumberTab && isNumber
								? <input style={{backgroundColor: "var(--primary)"}} onChange={ event => setNumber(event.target.valueAsNumber) } type="number" value={ number } />
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
