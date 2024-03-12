"use client"

import Link from "next/link"
import styles from './Bookmark.module.css'
import { useTheme } from "next-themes"

interface Props {
	next_url: string
	previous_url: string
}

export default function Bookmark({ next_url, previous_url }: Props) {
	const {theme, setTheme} = useTheme();

	let style = '';

	switch (theme) {
		case "pink":
			style = styles.pink
			break;
		case "dark":
			style = styles.dark
			break;
	}

	return (
		<section className={ styles.bookmark + " " + style }>
			<Link onClick={ () => setTheme(theme === 'dark' ? 'pink' : 'dark') } href={ theme !== 'dark' ? next_url : previous_url }>V</Link>
		</section>
	)
}

