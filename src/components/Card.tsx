import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function Card({ children }:Props) {
	return (
		<section className="card mixed-radius shadow">{ children }</section>
	)
}
