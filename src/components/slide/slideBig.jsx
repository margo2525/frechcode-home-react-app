import PropTypes from 'prop-types';
import { useState, useContext, } from 'react';
import styles from './slideBid.sass';
import defaultImage from './img/question-mark.jpg';
import { UserContext } from './../contexts';
function Slide({ slide: { title, description, src }, isCurrent }) {
	const isFullScreen = useContext(UserContext);
	/*для полноэкранного режима---????*/
}

export default Slide;
