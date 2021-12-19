
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';

const UserList = (props: any) => {

	const users: any = useSelector<AppState>(state => state.users.users);


	useEffect(() => {

		
	}, [users])

	return (
		<div className='grid-cols-2'>

		</div>
	)
}

export default UserList
