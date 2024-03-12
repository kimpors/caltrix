import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function Header({ children }: Props) {
	return <header className="header shadow-lg">{ children }</header>
}
