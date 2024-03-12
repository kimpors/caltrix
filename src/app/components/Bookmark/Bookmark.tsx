import Link from "next/link"
import styles from './Bookmark.module.css'

interface Props {
	url: string
}

export default function Bookmark({ url }: Props) {
	return (
		<section className={ styles.bookmark }>
			<Link href={ url }>Bookmark</Link>
		</section>
	)
}

