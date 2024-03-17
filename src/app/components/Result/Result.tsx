"use client"

import { useEffect, useState } from "react"
import styles from './Result.module.css'

export default function Result() {
	const [results, setResults] = useState([] as string[]);
	
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem("results") || '{}') as string[];

		if (res) {
			setResults(res);
		}
	}, [localStorage.getItem("results")])

	return(
		<article className={ styles.result }>
			{results.map((result, i) => 
				<section key={i}>
					{ result }
				</section>
			)}
		</article>
	)
}
