import '../style/ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const [hidden, setHidden] = useState(true);

	function titleChangeHandler(event) {
		setTitle(event.target.value);
	}
	function amountChangeHandler(event) {
		setAmount(event.target.value);
	}
	function dateChangeHandler(event) {
		setDate(event.target.value);
	}
	function submitHandler(event) {
		event.preventDefault();
		let obj = {
			title: title,
			amount: +amount,
			date: new Date(date),
		};
		props.onSubmitClicked(obj);
		setAmount('');
		setDate('');
		setTitle('');
	}
	function unHideHandler() {
		setHidden(false);
	}
	function cancelButnHandler() {
		setHidden(true);
	}

	if (hidden) {
		return (
			<div className="new-expense__action">
				<button onClick={unHideHandler}>Add Expense</button>
			</div>
		);
	} else {
		return (
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input
							type="text"
							value={title}
							onChange={titleChangeHandler}
							required
						/>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input
							type="number"
							value={amount}
							min="0.01"
							step="0.01"
							onChange={amountChangeHandler}
							required
						/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input
							type="date"
							value={date}
							min="2019-01-01"
							max="2024-12-31"
							onChange={dateChangeHandler}
							required
						/>
					</div>
				</div>
				<div className="new-expense__action">
					<button type="submit">Add Expense</button>
					<button type="button" onClick={cancelButnHandler}>
						Cancel
					</button>
				</div>
			</form>
		);
	}
};

export default ExpenseForm;
