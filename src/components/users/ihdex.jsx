
import Skeleton from './Skeleton';

import React from 'react';
import { User } from './User';
import './user.module.css'


export const Users = ({ items, isLoading }) => {
	return (
		<>
			<div className="userCadr">

				{isLoading ? (
					<div className="skeleton-list">
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</div>
				) : (
					<ul className="users-list">
						<User />
					</ul>
				)}

			</div>

		</>
	);
};








