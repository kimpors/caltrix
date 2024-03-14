"use client"

import { useEffect, useState } from "react"

export default function Result() {
	const [results, setResults] = useState([] as string[]);
	
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem("results") || '{}') as string[];

		if (res) {
			setResults(res);
		}
	}, [])


	return(
		<article>
			{results.map((result, i) => 
				<section key={i}>
					{ result }
				</section>
			)}
		</article>
	)
}
