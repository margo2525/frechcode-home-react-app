import './user.scss'

import React from 'react';
export const User = () => (
	<li>
		<div>
			<img className="avatar" src="https://reqres.in/img/faces/1-image.jpg" alt="User" />
			<div>
				<h3>Amon Bower</h3>
				<p>george.bluth@reqres.in</p>

			</div>
		</div>

		<button className="send-invite-btn">+</button>

	</li>
);




