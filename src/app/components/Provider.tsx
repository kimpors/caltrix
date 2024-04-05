'use client'

import { ThemeProvider } 					from "next-themes"
import { ReactNode, useEffect, useState } 	from "react"

interface Props {
	children: ReactNode
};

export default function Provider({ children }:Props) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return <ThemeProvider attribute="class" defaultTheme="pink" themes={ ['gray', 'green', 'blue', 'dark', 'pink']} >{ children }</ThemeProvider>
}
