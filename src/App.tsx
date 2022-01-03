import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import { loadUsers } from './store/actions/users';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(loadUsers())

    // eslint-disable-next-line 
  }, [])

  return (
    <div className="main max-w-screen-xl m-auto" >
      <Header />
      <UserList />
    </div >





  );
}

export default App;
