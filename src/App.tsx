import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import UserList from './components/UserList';
import { loadUsers } from './store/actions/users';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers(1))
  }, [])

  return (

    <h1 className="text-7xl text-center uppercase font-bold underline">

      <UserList />

    </h1>

  );
}

export default App;
