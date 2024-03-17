"use client"

import Link from "next/link"
import styles from './Bookmark.module.css'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface Props {
	next_url: string
	previous_url: string
}

export default function Bookmark({ next_url, previous_url }: Props) {
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();
	const [style, setStyle] = useState("pink");

	useEffect(() => {
		if (pathname === "/settings") {
			switch (localStorage.getItem("prev-theme") || "pink") {
				case 'pink':
					setStyle(styles.pink);
					break;
				case 'blue':
					setStyle(styles.blue);
					break;
				case 'green':
					setStyle(styles.green);
					break;
				case 'gray':
					setStyle(styles.gray);
					break;
			}

			localStorage.setItem("prev-theme", theme || "pink");
			setTheme("dark");
		} else {
			setStyle(styles.light)
			setTheme(localStorage.getItem("prev-theme") || "pink");
		}
	}, [pathname]);
	
	return (
		<section className={`${styles.bookmark} ${style}`}>
			<Link href={ theme !== 'dark' ? next_url : previous_url }>V</Link>
		</section>
	)
}

