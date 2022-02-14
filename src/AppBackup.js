import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { auth } from './backend/firebase';
import Feeds from './components/Feeds';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { login, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
      }
    })
  })
  
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login/>
      ) : (
        <div className='app-body'>
            <Sidebar />
            <Feeds/>
            <Widgets/>
      </div>
      )}
    </div>
  );
}

export default App;
