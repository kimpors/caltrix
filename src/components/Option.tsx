import { ReactNode } from "react"

interface Props {
	children: ReactNode
	className: string
}

export default function Option({ className, children }:Props) {
	return (
		<section className={`option shadow ${className}`}>{ children }</section>
	)
}
