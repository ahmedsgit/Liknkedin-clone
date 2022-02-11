import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import Widgets from './components/Widgets';
import Login from './components/Login'
import './App.css';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)

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
