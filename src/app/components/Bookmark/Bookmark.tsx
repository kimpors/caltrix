"use client"

import Link from "next/link"
import styles from './Bookmark.module.css'
import { useTheme } from "next-themes"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Bookmark() {
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		if (pathname === "/settings") {
			const prev = localStorage.getItem("theme") || "pink";
			setTheme("dark");
			localStorage.setItem("theme", prev);
		} else {
			setTheme(localStorage.getItem("theme") || "pink");
		}
	}, [pathname]);

	return (
		<section className={`${styles.bookmark} ${ theme !== 'dark' ? 'dark' : localStorage.getItem('theme') || 'pink' }`}>
			<Link style={{height: "100%", width: "100%"}} href={ pathname === "/settings" ? "/" : "/settings" }></Link>
		</section>
	)
}

