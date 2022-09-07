import '../style/ExpenseFilter.css';

const ExpenseFilter = (props) => {
	function selectHandler(event) {
		props.ExpenseFilterRaiser(event.target.value);
	}

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label className="expenses-filter">Filter By year</label>
				<select
					value={props.currYear}
					name="yearFiltered"
					onChange={selectHandler}
				>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
					<option value="2024">2024</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
