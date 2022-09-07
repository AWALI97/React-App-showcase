import ExpenseDate from './ExpenseDate';
import Card from './Card';
import '../style/ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	function clickHandler() {
		setTitle('Updated!');
		console.log(title);
	}

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Click!</button>
		</Card>
	);
}

export default ExpenseItem;
