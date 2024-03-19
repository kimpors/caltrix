import Export from "../components/Export/Export"
import ThemeChooser from "../components/ThemeChooser/ThemeChooser"

export default function Settings() {
	return (
		<main role="main">
			<Export />
			<ThemeChooser themes={['pink', 'blue', 'green', 'gray']}/>
		</main>
	)
}
