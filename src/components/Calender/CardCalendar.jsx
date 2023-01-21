import React from 'react';
import CurrentDate from './CurrentData/CurrentData';
import Calendar from './index';




export default class CalendarCard extends React.Component {
	state = {
		date: null
	};

	handleDateChange = date => this.setState({ date });

	render() {
		const { date } = this.state;

		return (
			<div>

				<CurrentDate />
				<Calendar
					onChange={this.handleDateChange}
				/>
			</div>
		);
	}
}