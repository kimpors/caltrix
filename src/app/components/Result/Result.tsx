"use client"

import styles from './Result.module.css'

interface Props {
	results: string[]
	setResults: (results: string[]) => void
}

export default function Result({ results, setResults }:Props) {
	function Clear() {
		setResults([]);
	}

	if (results.length === 0) {
		return null;
	}

	return(
		<article className={ styles.result }>
			<button onClick={() => Clear()}>Clear</button>
			{results.toReversed().map((result, i) => 
				<section key={i}>
					{ result }
				</section>
			)}
		</article>
	)
}
