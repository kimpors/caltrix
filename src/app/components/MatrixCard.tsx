"use client"

import { useState } from "react"
import { useStateContext } from "./StateContext"
import Card from "./Card/Card"
import More from "./More/More"
import Matrix from "./Matrix/Matrix"
import Controller from "./Controller/Controller"

interface Props {
	name: string
	withNumberTab: boolean
}

export default function MatrixCard({ name, withNumberTab }:Props) {
	const [isMore, setIsMore] = useState(false);
	const { number, setNumber, isNumber, setIsNumber, left, setLeft, right, setRight } = useStateContext();

	const dimmer = {filter: "brightness(90%)"};
	const matrix = () => name === "left" ? left : right;
	const setMatrix = () => name === "left" ? setLeft : setRight;

	return (
		<article className="container">
			<section className='tab'>
				<button style={ isMore ? {} : dimmer } className='shadow' onClick={ () => setIsMore(!isMore)}>=</button>
				{withNumberTab && 
					<>
						<button style={ isNumber ? dimmer : {} } className='shadow' onClick={ () => setIsNumber(false) }>M</button>
						<button style={ isNumber ? {} : dimmer } className='shadow' onClick={ () => setIsNumber(true) }>N</button>
					</>
				}
			</section>
			<Card>
				{isMore
					? <More matrix={ name === "left" ? left : right }/>
					: (
						<>
							{withNumberTab && isNumber
								? <input style={{backgroundColor: "var(--primary)"}} onChange={ event => setNumber(event.target.valueAsNumber) } type="number" value={ number } />
	 							: 
								<> 
									<Matrix name={ name } matrix={ matrix() } setMatrix={ setMatrix() }/>
									<Controller name={ name } matrix={ matrix() } setMatrix={ setMatrix() }/>
								</> 
							}
						</>
					)
				}
			</Card>
		</article>
	)
}
