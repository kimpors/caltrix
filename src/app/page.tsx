import Option from './components/Option/Option'
import LeftCart from './components/LeftCard';
import RightCard from './components/RightCard';

export default function Home() {
	return (
		<main role='main'>
			<LeftCart />
			<Option className='flex-col p-5'>
				<button>+</button>
				<button>-</button>
				<button>*</button>
				<button>^</button>
			</Option>
			<RightCard />
		</main>
	)
}
