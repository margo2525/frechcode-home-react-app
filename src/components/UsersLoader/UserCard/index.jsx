import React from 'react';
import cx from 'classnames';


import styles from './UserCard.module.scss';

const { wrapperCard, userCardMaleStyle, userCardFemaleStyle } = styles;

const UserCard = (props) => {
	const { users, handleIncrement } = props;

	const userCard = users.map(({ gender, id: { value }, name: { first, last }, login: { username }, picture, }) => (
		<li
			className={cx(wrapperCard, {
				[userCardMaleStyle]: gender === 'male',
				[userCardFemaleStyle]: gender === 'female',
			})}
			key={value}>
			<UserCardTop
				name={first}
				lastName={last}
				login={username}
				picture={picture}
			/>
			<UserCardBottom
				name={first}
				lastName={last}
				login={username}
			/>
			<UserPlus
				gender={gender}
			/>
			<>
				<button onClick={handleIncrement}>
					Add more
				</button>
			</>
		</li>
	))

	return (
		<>
			{userCard}
		</>
	);
}

export default UserCard;