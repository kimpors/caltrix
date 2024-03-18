"use client"

import { useStateContext } from '../StateContext'
import styles from './Result.module.css'

export default function Result() {
	const { results, setResults } = useStateContext();

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
