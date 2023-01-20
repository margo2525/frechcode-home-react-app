import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Slide from './slideBig';
import { BsArrowsFullscreen } from "react-icons/bs";
import { GoTriangleLeft } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import { AiOutlineStop } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";


import styles from './slide.module.sass';
import { UserContext } from './../contexts';
function Carousel({ slides }) {

	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [delay, setDelay] = useState(2000);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [isHovered, setIsHovered] = useState(false); // При наведении показывается дополнительное описание

	const prevSlide = () => {
		setCurrentSlide((currentSlide) => {
			const isFirstSlide = currentSlide === 0;
			return isFirstSlide ? slides.length - 1 : currentSlide - 1;
		});
	};

	const nextSlide = () => {
		setCurrentSlide((currentSlide) => {
			const isLastSlide = currentSlide === slides.length - 1;
			return isLastSlide ? 0 : currentSlide + 1;
		});
	};
	const fullScreen = () => {
		setIsFullScreen((isFullScreen) => !isFullScreen);
	};

	useEffect(() => {
		let id = null;
		if (!isPlaying) {
			id = setInterval(nextSlide, delay);
		}
		return () => {
			clearInterval(id);
		};
	}, [isPlaying, delay]);

	return (
		<div className={styles.containers}>
			<div className={styles.slide}>
				<img src={slides[currentSlide].src} className={styles.slide}></img>
			</div>
			<figcaption className={styles.figcaption}>
				<h3>{slides[currentSlide].title ?? 'The image title is missing'}</h3>
				{isHovered && (
					<p className={styles.description}>
						{slides[currentSlide].description ?? 'The image description is missing'}
					</p>
				)}
			</figcaption>
			<div className={styles.button}>
				<button className={styles.btn} onClick={prevSlide}>
					<GoTriangleLeft />
				</button>
				<button className={styles.btn} onClick={nextSlide}>
					<GoTriangleRight />
				</button>
				<button
					className={styles.btn}
					onClick={() => setIsPlaying((isPlaying) => !isPlaying)}
				>
					{isPlaying ? <FaGooglePlay /> : <AiOutlineStop />}
				</button>
				<button className={styles.fullScreen} onClick={fullScreen}>
					<BsArrowsFullscreen />
				</button>

			</div>
		</div>
	);
}




export default Carousel;
