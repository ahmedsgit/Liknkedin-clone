import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import Widgets from './components/Widgets';
import Login from './components/LoginBackup'
import './App.css';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './backend/firebase';

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
      <Header/>
      {!user ? (
        <Login/>
      ) : (
        <div className='app-body'>
        <Sidebar />
        <Feeds/>
        <Widgets/>
      </div>
      )}
      {/* app body */}
      <Footer />
    </div>
  );
}

export default App;
