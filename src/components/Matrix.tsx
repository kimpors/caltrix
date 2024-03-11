interface Props {
	size: number
}

export default function Matrix({ size }:Props) {
	const rows = []

	for (let i = 0; i < size; i ++) {
		const temp = []

		for (let j = 0; j < size; j++) {
			temp.push(j)
		}

		rows.push(temp)
	}

	const list = rows.map(row => row.map(num => 
		<input key={num.toString()} type="number" />
	))  

	return (
		<section className={`matrix grid-cols-4`}>{ list }</section>
	)
}
