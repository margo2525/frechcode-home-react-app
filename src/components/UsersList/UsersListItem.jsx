import style from './style.module.css'
function UsersListItem(props) {
	const {
		selectUser,
		deleteUser,
		user: {
			id,
			isSelected,
			gender,
			firstName,
			lastName,
			imgsrc,

		},
	} = props;

	const inLineStyle = {
		color: gender === "Male" ? "red" : "bly",
	};

	const inlineCardStyle = {
		backgroundColor: isSelected ? "violet" : "1111b8",
	};

	return (
		<div
			className={style.userCard}
			onMouseDown={(event) => selectUser(event, id)}
		>
			<div className={style.photoContainer} style={inLineStyle} >
				<div style={inlineCardStyle}>
					<img src={imgsrc} className={style.userPhoto} alt="#" />
					<div onClick={(event) => deleteUser(event, id)}>
						<button className={style.sendinvitebtn}>+</button>
					</div>
				</div>
				<div className={style.boxcontener}>
					<h2 className={style.firstName}>
						{firstName}
					</h2>
					<h2 className={style.lastName}>{lastName}</h2>
				</div>




			</div>
		</div>
	);
}

export default UsersListItem;

