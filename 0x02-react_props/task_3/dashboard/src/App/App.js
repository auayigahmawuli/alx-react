import React from 'react';
/*Components*/
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
/*Styles*/
import './App.css';

function App() {
  return(
    <>
      <Notifications />
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        <Login />
        {/* Footer */}
      </div>
    </>
  );
}

export default App;
