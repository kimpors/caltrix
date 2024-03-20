'use client'

import { useTheme } from 'next-themes';
import styles from './ThemeChooser.module.css'

interface Props {
	themes: string[]
}

export default function ThemeChooser({ themes }:Props) {
	const { setTheme } = useTheme();

	return(
		<section className={ styles.chooser }>
			<h1>Themes</h1>

			{themes.map((t, i) => (
				<button className="shadow" key={i} onClick={() => setTheme(t) }>{t}</button>
			))}
		</section>
	)
}
