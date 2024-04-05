import styles			from './Card.module.css'
import { ReactNode }	from "react"

interface Props {
	children: ReactNode
}

export default function Card({ children }:Props) {
	return <section className={ styles.card + " " + styles.round + " " + "shadow-mid" }>{ children }</section>
}

