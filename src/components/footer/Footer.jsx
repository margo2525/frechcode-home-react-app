import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { FaChromecast } from 'react-icons/fa';



const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<FaChromecast />
						<li className="social__item"><a href="#!"><FaFacebook /></a></li>
						<li className="social__item"><a href="#!"><FaGithub /></a></li>
						<li className="social__item"><a href="#!"><FaTelegram /></a></li>
						<li className="social__item"><a href="#!"><FaTelegram /></a></li>
						<li className="social__item"><a href="#!"><FaTelegram /></a></li>
					</ul>

				</div>
			</div>
		</footer >
	);
}

export default Footer;