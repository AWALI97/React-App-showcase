import '../style/ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
	let children = [];
	let expensesArr = props.expenses;

	let filteredArr = expensesArr.filter((val) => {
		return val.date.getFullYear().toString() === filterDate;
	});

	filteredArr.forEach((item) => {
		const id = `ex_id_${Math.random().toString()}`;
		children.push(<ExpenseItem key={id} {...item} />);
	});

	if (children.length < 1) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	} else {
		return <ul className="expenses-list"> {children} </ul>;
	}
};

export default ExpensesList;
