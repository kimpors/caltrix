'use client'

import Export 		from "@/app/components/Export/Export";
import ThemeChooser from "@/app/components/ThemeChooser/ThemeChooser";

export default function Settings() {
	return (
		<main role="main">
			<Export />
			<ThemeChooser themes={['pink', 'blue', 'green', 'gray']}/>
			<style jsx global>{`
			body, main {
				color: white;
				background-color: #363a4f;
			}
		  `}</style>
		</main>
	)
}
