

import './Navbar.css'

import BtnDarkMode from '../btnDarkMode/BtnDarkMode';


const Navbar = () => {





	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<a href="./index.html" className="logo"><strong>Freshcode</strong>homework </a>

					<BtnDarkMode />
					<ul className="nav-list">
						<li className="nav-list__item">

							Home

						</li>

						<li className="nav-list__item">

							Project

						</li>
						<li className="nav-list__item">

							Contacts

						</li>
					</ul>


				</div>
			</div>
		</nav>
	);
}

export default Navbar;