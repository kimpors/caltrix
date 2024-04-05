import styles 			from './Option.module.css'
import { ReactNode } 	from "react"

interface Props {
	children: ReactNode
	className: string
}

export default function Option({ className, children }:Props) {
	return <section className={`${styles.option} shadow ${className}`}>{ children }</section>
}
