
import styles from "./CurrentData.module.css";
import { useContext } from 'react';
import { CurrentDataContext } from './../../contexts';

const CurrentDate = () => {
	let currentDate = new Date(useContext(CurrentDataContext));

	return (
		<div className={styles.container}>


			<div className={styles.currentDay}>{currentDate.getDate()}</div>

		</div>
	);
}


export default CurrentDate;