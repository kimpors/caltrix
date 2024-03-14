'use client'

import { useEffect, useState } from "react"
import Card from "./Card/Card";
import Matrix from "./Matrix/Matrix";
import Option from "./Option/Option";

export default function LeftCart() {
	const [more, setMore] = useState(false);

	useEffect(() => {
		localStorage.setItem("left", JSON.stringify(Array<number>(16).fill(0)));
		localStorage.setItem("right", JSON.stringify(Array<number>(16).fill(0)));
	}, [])

	return(
		<article className='container'>
			<section className='tab'>
				<button className='shadow' onClick={ () => setMore(!more)}>=</button>
			</section>
			{more 
				? <Card><h1>More</h1></Card>
				: (
					<Card>
						<Matrix name="left" size={4}/>

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
