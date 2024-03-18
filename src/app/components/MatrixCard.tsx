"use client"

import { useEffect, useState } from "react"
import Card from "./Card/Card"
import More from "./More/More"
import Matrix from "./Matrix/Matrix"
import Controller from "./Controller/Controller"

interface Props {
	name: string
	withNumberTab: boolean
	isNumber: boolean,
	setIsNumber: (isNumber: boolean) => void
}

export default function MatrixCard({ name, withNumberTab, isNumber, setIsNumber }:Props) {
	const [isMore, setIsMore] = useState(false);
	const [number, setNumber] = useState(0);

	useEffect(() => {
		localStorage.setItem("number", JSON.stringify(number));
	}, [number])

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
					? <More name={ name } swapTo={ name === "left" ? "right" : "left" }/>
					: (
						<>
							{isNumber
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
