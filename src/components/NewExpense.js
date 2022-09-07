import ExpenseForm from './ExpenseForm';
import '../style/NewExpense.css';

export const NewExpense = (props) => {
	function submitHandler(content) {
		const data = {
			...content,
			id: 'id' + Math.random().toString(),
		};
		console.log('NewExpense: ', data);
		props.onSubmitHandler(data);
	}

	return (
		<div className="new-expense">
			<ExpenseForm onSubmitClicked={submitHandler} />
		</div>
	);
};
