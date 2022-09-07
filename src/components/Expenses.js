import ExpensesChart from './ExpensesChart';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import '../style/Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

export const Expenses = (props) => {
	const [filterDate, setFilterDate] = useState('2021');

	let children = [];
	let expensesArr = props.expenses;

	let filteredArr = expensesArr.filter((val) => {
		return val.date.getFullYear().toString() === filterDate;
	});

	filteredArr.forEach((item) => {
		const id = `ex_item_id_${Math.random().toString()}`;
		const id2 = `ex_ul_id_${Math.random().toString()}`;

		children.push(
			<ul key={id2}>
				<ExpenseItem key={id} {...item} />
			</ul>
		);
	});

	function ExpenseFilterRaiser(content) {
		setFilterDate(content);
	}
	function noChildrenHandler() {
		return children.length < 1 ? (
			<h2 className="expenses-list__fallback">
				No item matches search criteria
			</h2>
		) : (
			children
		);
	}
	const element = noChildrenHandler();

	return (
		<li>
			<Card class="expenses">
				<ExpenseFilter
					currYear={filterDate}
					ExpenseFilterRaiser={ExpenseFilterRaiser}
				/>
				<ExpensesChart expenses={filteredArr} />
				{element}
			</Card>
		</li>
	);
};
