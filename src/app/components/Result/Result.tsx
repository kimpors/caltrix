"use client"

import styles 				from './Result.module.css'
import { useStateContext } 	from '../StateContext'
import { MatrixString } 	from '@/app/script';

import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      math: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function Result() {
	const { results, setResults } = useStateContext();

	if (results.length === 0) {
		return null;
	}

	function parse(value: string): number[][] {
		return JSON.parse(value);
	}

	function format(left: string, result: string, right?: string, operation?: string): string {
		let res = MatrixString(parse(left));

		if (operation) {
			res += `<mo>${operation}</mo>`;
		}

		if (Number(right)) {
			res += `<mn>${right}</mn>`;
		} else if (right) {
			res += MatrixString(parse(right));
		}

		res += "<mo>=</mo>";

		if (Number(result)) {
			res += `<mn>${result}</mn>`;
		} else {
			res += MatrixString(parse(result));
		}

		return res;
	}

	return(
		<article className={ styles.result }>
			<button onClick={() => setResults([]) }>Clear</button>
			{results.toReversed().map(({ left, right, operation, result }, i) => 
				<section key={i}>
					<math dangerouslySetInnerHTML={{__html: format(left, result, right, operation) }}></math>
					<button onClick={ () => navigator.clipboard.writeText(result)}>Copy</button>
				</section>
			)}
		</article>
	)
}
