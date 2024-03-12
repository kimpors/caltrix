import { ReactNode } from "react"
import styles from './Footer.module.css'

interface Props {
	children: ReactNode
}

export default function Footer({ children }: Props) {
	return <footer className={ styles.footer }>{ children }</footer>
}

