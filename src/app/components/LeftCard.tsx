'use client'

import { useState } from "react"
import Card from "./Card/Card";
import Matrix from "./Matrix/Matrix";

export default function LeftCart() {
	const [more, setMore] = useState(false);

	return(
		<article className='container'>
			<section className='tab'>
				<button className='shadow' onClick={ () => setMore(!more)}>=</button>
			</section>
			{more 
				? <Card><h1>More</h1></Card>
				: <Card><Matrix size={4}/></Card> 
			}
		</article>
	)
}
