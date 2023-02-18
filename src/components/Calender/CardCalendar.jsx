import React from 'react';
import CurrentDate from './CurrentData/CurrentData';
import Calendar from './index';




export default class CalendarCard extends React.Component {

	render() {


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