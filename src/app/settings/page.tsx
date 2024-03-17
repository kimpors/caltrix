import ThemeChooser from "../components/ThemeChooser/ThemeChooser"

export default function Settings() {
	return (
		<main role="main">
			<ThemeChooser themes={['pink', 'blue', 'green', 'gray']}/>
		</main>
	)
}
