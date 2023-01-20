import React from 'react';
import classnames from 'classnames';

import * as calendar from './Calender';

import './style.module.css';

export default class Calendar extends React.Component {
	static defaultProps = {
		date: new Date(),
		years: [2023],
		monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'],
		weekDayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
		onChange: Function.prototype
	};

	state = {
		date: this.props.date,
		currentDate: new Date(),
		selectedDate: null
	};

	get year() {
		return this.state.date.getFullYear();
	}

	get month() {
		return this.state.date.getMonth();
	}

	get day() {
		return this.state.date.getDate();
	}

	handlePrevMonthButtonClick = () => {
		const date = new Date(this.year, this.month - 1);

		this.setState({ date });
	};

	handleNextMonthButtonClick = () => {
		const date = new Date(this.year, this.month + 1);

		this.setState({ date });
	};

	handleSelectChange = () => {
		const year = this.yearSelect.value;
		const month = this.monthSelect.value;

		const date = new Date(year, month);

		this.setState({ date });
	};

	handleDayClick = date => {
		this.setState({ selectedDate: date });

		this.props.onChange(date);
	};

	render() {
		const { years, monthNames, weekDayNames } = this.props;
		const { currentDate, selectedDate } = this.state;

		const monthData = calendar.getMonthData(this.year, this.month);

		return (
			<div className="calendarCard">
				<div className="calendar1">

					<h2></h2>

					<p>7</p>

				</div>

				<div className="calendar">
					<header>
						<button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

						<select
							ref={element => this.monthSelect = element}
							value={this.month}
							onChange={this.handleSelectChange}
						>
							{monthNames.map((name, index) =>
								<option key={name} value={index}>{name}</option>
							)}
						</select>

						<select
							ref={element => this.yearSelect = element}
							value={this.year}
							onChange={this.handleSelectChange}
						>
							{years.map(year =>
								<option key={year} value={year}>{year}</option>
							)}
						</select>

						<button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
					</header>

					<table>
						<thead>
							<tr>
								{weekDayNames.map(name =>
									<th key={name}>{name}</th>
								)}
							</tr>
						</thead>

						<tbody>
							{monthData.map((week, index) =>
								<tr key={index} className="week">
									{week.map((date, index) => date ?
										<td
											key={index}
											className={classnames('day', {
												'today': calendar.areEqual(date, currentDate),
												'selected': calendar.areEqual(date, selectedDate)
											})}
											onClick={() => this.handleDayClick(date)}
										>{date.getDate()}</td>
										:
										<td key={index} />
									)}
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>

		);
	}
}