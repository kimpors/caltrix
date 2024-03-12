import { ReactNode } from "react"
import styles from './Card.module.css'

interface Props {
	children: ReactNode
}

export default function Card({ children }:Props) {
	return <section className={ styles.card + " " + styles.round + " " + "shadow" }>{ children }</section>
}

