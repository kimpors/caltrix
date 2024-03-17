'use client'

import styles from './ThemeChooser.module.css'

interface Props {
	themes: string[]
}

export default function ThemeChooser({ themes }:Props) {
	function handle(name: string) {
		localStorage.setItem("theme", name);
		localStorage.setItem("prev-theme", name);
	}

	return(
		<section className={ styles.chooser }>
			<h1>Themes</h1>

			{themes.map((t, i) => (
				<button className="shadow" key={i} onClick={() => handle(t)}>{t}</button>
			))}
		</section>
	)
}
