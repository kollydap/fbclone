import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css';
 import Widgets from './components/Widgets';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';


function App() {
  const [{user}, dispatch] = useStateValue();
  return (

   <div className='app'>
     {! user ? (
       <Login />
     )  : (
       <>
        <Header / >
    <div className='app__body'>
      <Sidebar />
      <Feed />
      <Widgets className="widgets"/>
    
    </div>
       </>
     )}
    
   </div>
  );
}

export default App;
