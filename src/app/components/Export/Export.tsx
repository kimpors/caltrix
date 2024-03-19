"use client"

import { useStateContext } from "../StateContext"
import styles from './Export.module.css';

export default function Export() {
	const { results } = useStateContext();
	const blob = new Blob([JSON.stringify(results)], { type: "application/json" });
	const href = URL.createObjectURL(blob);

	return (
		<section className={ styles.export }>
			<h1>Backup</h1>

			<a href={ href } className="shadow" download={ "matrix.json" }>Export</a>
		</section>
	)
}
