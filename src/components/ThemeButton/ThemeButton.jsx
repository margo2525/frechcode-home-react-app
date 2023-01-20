const ThemeButton = props => {
	const { isLight, changeTheme } = props;

	const inlineStyle = {
		color: isLight ? 'black' : 'white',
		backgroundColor: isLight ? 'white' : 'black',
	};

	return (
		<button onClick={changeTheme} style={inlineStyle}>
			{isLight ? 'Dark' : 'Light'}
		</button>
	);
};

export default ThemeButton;