import { Component } from 'react';
import UsersListItem from './UsersListItem';
import style from './style.module.css'

// Списки і ключі
// 1 Реакт вміє рендерити масиви
// 2 Кожен елемент, що повторюється, повинен мати проп key
//   (унікальний і однозначний для кожного елементу масиву, найчастіше id)

const usersData = [

	{
		id: 1,
		firstName: 'Test1',
		lastName: 'Testovich1',
		age: 28,
		imgsrc:
			'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
	},
	{
		id: 2,
		firstName: 'Test2',
		lastName: 'Testovich2',
		age: 31,
		gender: "Male",

		imgsrc:
			'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 3,
		firstName: 'Test3',
		lastName: 'Testovich3',
		age: 70,
		gender: "Male",

		imgsrc:
			'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 4,
		firstName: 'Test4',
		lastName: 'Testovich4',
		age: 20,
		gender: "Female",

		imgsrc:
			'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 5,
		firstName: 'Test5',
		lastName: 'Testovich5',
		age: 28,
		gender: "Male",

		imgsrc:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
];

export default class UsersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersData.map((u) => ({ ...u, isSelected: false })),
		};
	}

	selectUser = (event, id) => {
		const { users } = this.state;
		const foundIndex = users.findIndex((u) => u.id === id);

		const newUsers = [...users];
		newUsers[foundIndex] = {
			...newUsers[foundIndex],
			isSelected: !newUsers[foundIndex].isSelected,
		};
		this.setState({ users: newUsers });
	};

	deleteUser = (event, id) => {
		const { users } = this.state;
		const newUsers = [...users].filter((item) => item.id != id);
		this.setState({ users: newUsers });
		event.stopPropagation();
	};

	mapUser = (u) => {
		return (
			<UsersListItem
				key={u.id}
				selectUser={this.selectUser}
				deleteUser={this.deleteUser}
				user={u}
			></UsersListItem>
		);
	};

	render() {
		const { users } = this.state;
		return (
			<>
				<div className={style.container}>{users.map(this.mapUser)}</div>
			</>
		);
	}
}

