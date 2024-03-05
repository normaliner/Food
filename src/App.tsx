import { MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
function App() {
	const addCouner = (e: MouseEvent) => {
		console.log(e);
	};
	return (
		<>
			<Button appearence='small' onClick={addCouner} className='huy'>
				Button
			</Button>
			<Button appearence='big' onClick={addCouner} className='huy'>
				Button
			</Button>
			<Input placeholder='Email'/>
		</>
	);
}

export default App;
