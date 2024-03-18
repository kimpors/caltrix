'use client'

import { useEffect, useState } from "react"
import Card from "./Card/Card"
import More from "./More/More"
import Matrix from "./Matrix/Matrix"
import Controller from "./Controller/Controller"
import { useRouter } from "next/navigation"

interface Props {
	name: string
	withNumberTab: boolean
}

export default function MatrixCard({ name, withNumberTab }:Props) {
	const [more, setMore] = useState(false);
	const [number, setNumber] = useState(false);
	const [value, setValue] = useState(0);
	const router = useRouter();

	useEffect(() => {
		localStorage.setItem("number", JSON.stringify(value));
	}, [value])

	function handle(isNumber: boolean) {
		setNumber(isNumber);
		localStorage.setItem("isNumber", JSON.stringify(isNumber));
	}

	return (
		<article className="container">
			<section className='tab'>
				<button style={more ? {} : {filter: "brightness(90%)"}} className='shadow' onClick={ () => setMore(!more)}>=</button>
				{withNumberTab && 
					<>
						<button style={number ? {filter: "brightness(90%)"} : {}} className='shadow' onClick={ () => { handle(false); router.refresh(); }}>M</button>
						<button style={number ? {} : {filter: "brightness(90%)"}} className='shadow' onClick={ () => { handle(true); router.refresh(); }}>N</button>
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
