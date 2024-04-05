import styles 			from './Footer.module.css'
import { ReactNode } 	from "react"

interface Props {
	children: ReactNode
}

export default function Footer({ children }: Props) {
	return <footer className={ styles.footer }>{ children }</footer>
}

