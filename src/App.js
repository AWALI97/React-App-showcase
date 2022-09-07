import { Expenses } from './components/Expenses';
import { NewExpense } from './components/NewExpense';
import { useState } from 'react';

console.clear();
console.log('____________________starting app___________________');

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 25,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 340, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 75,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 205,
		date: new Date(2021, 5, 12),
	},
];
function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	function onSubmitHandler(content) {
		setExpenses((old) => {
			return [content, ...old];
		});
	}

	return (
		<div>
			<NewExpense onSubmitHandler={onSubmitHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
