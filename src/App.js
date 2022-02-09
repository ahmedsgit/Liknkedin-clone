import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import Widgets from './components/Widgets';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      {/* app body */}
      <div className='app-body'>
        <Sidebar />
        <Feeds/>
        <Widgets/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
