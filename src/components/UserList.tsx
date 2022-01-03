
import React, { useEffect, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
// import { User } from '../store/types/users';

const UserList: FC<{}> = () => {


	const [items, setItems] = useState([]);

	const users: any = useSelector<AppState>(state => state.users.users);

	const filteredUsers: any = useSelector<AppState>(state => state.users.filteredUsers);


	useEffect(() => {

		if (filteredUsers.length > 0) setItems(filteredUsers)

	}, [filteredUsers]);


	useEffect(() => {

		if (users.length > 0) setItems(users);

	}, [users])

	return (

		<section id="photos" className="my-5 grid grid-cols-1 md:grid-cols-3 gap-4">
			{
				items?.map((user: any, index: number) => (
					<div
						key={index}
						className="hover:opacity-75 p-6 max-w-sm w-80 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
						<div className="shrink-0">
							<img className="h-12 w-12 rounded-md" src={user.picture.large} alt="ChitChat Logo" />
						</div>
						<div>
							<div className="text-xl font-medium text-black">{`${user.name.first} ${user.name.last}`}</div>
							<p className="text-gray-500">{user.nat}</p>
						</div>
					</div>
				))
			}
		</section >

	)
}

export default UserList
