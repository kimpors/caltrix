"use client"

import { useEffect, useState } from "react"
import styles from './Result.module.css'
import { useRouter } from "next/navigation";

export default function Result() {
	const [results, setResults] = useState([] as string[]);
	const router = useRouter();
	
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem("results") || '{}') as string[];

		if (res) {
			setResults(res);
		}
	}, [localStorage.getItem("results")])

	function Clear() {
		localStorage.setItem("results", "[]");
		router.refresh();
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
