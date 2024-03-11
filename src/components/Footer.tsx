import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function Footer({ children }: Props) {
	return <footer className="footer">{ children }</footer>
}
