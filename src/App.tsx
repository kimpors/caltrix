import Card from './components/Card.tsx'
import Option from './components/Option.tsx'
import Matrix from './components/Matrix.tsx'

export default function App() {
	return (
		<article className="main">
			<article className='container'>
				<section className='tab'>
					<input className='top-radius shadow' type="button" value="=" />
				</section>
				<Card>
					<Matrix size={4}/>
				</Card>
			</article>
		
			<Option className='flex-col p-5'>
				<button type="button">+</button>
				<button type="button">-</button>
				<button type="button">*</button>
				<button type="button">^</button>
			</Option>
			<article className='container'>
				<section className='tab'>
					<input className='top-radius shadow' type="button" value="=" />
					<input className='top-radius shadow' type="button" value="M" />
					<input className='top-radius shadow' type="button" value="N" />
				</section>
			
				<Card>
					<Matrix size={4}/>
					<Option className='flex-row mx-2 p-2'>
						<button type="button">+</button>
						<button type="button">clean</button>
						<button type="button">-</button>
					</Option>
				</Card>
			</article>
		</article>
	)
}
