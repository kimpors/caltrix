"use client"

import Link from "next/link"
import styles from './Bookmark.module.css'
import { usePathname } from "next/navigation"

export default function Bookmark() {
	const pathname = usePathname();

	return (
		<section className={ styles.bookmark } style={{ backgroundColor: pathname !== '/settings' ? '#363a4f' : 'var(--primary)' }}>
			<Link style={{ height: "100%", width: "100%" }} href={ pathname === "/settings" ? "/" : "/settings" }></Link>
		</section>
	)
}

