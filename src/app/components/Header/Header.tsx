import styles from './Header.module.css'

import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function Header({ children }: Props) {
	return <header className={ styles.header + " shadow-lg" }>{ children }</header>
}
