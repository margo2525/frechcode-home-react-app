
import styles from "./CurrentData.module.css";
import { useContext } from 'react';
import { CurrentDataContext } from './../../contexts';

const CurrentDate = () => {
	let currentDate = new Date(useContext(CurrentDataContext));

	return (
		<div className={styles.container}>



		</div>
	);
}


export default CurrentDate;