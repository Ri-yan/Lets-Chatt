import './App.css';
import React from 'react';
import Titlebar from './TitleBar/TitleBar';
import Login from './Login/Login';
import Register from './Register/Register';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserList from './UserList/UserList';
import ChatArea from './ChatArea/ChatArea';


function App() {
  return (
    <Router>
    <div className="App"> 
     {/* <Titlebar/> */}
    <Routes>
      <Route exact path='/chatt/' element={<><Titlebar/> <h1> Hello there! Welcome to Let's Chatt</h1></>}></Route>
          <Route exact path='/chatt/login' element={<> <Titlebar/><Login/></>}></Route>
          <Route exact path='/chatt/login' element={<> <Titlebar/><Login/></>}></Route>
          <Route exact path='/chatt/chats' element={ <> <Titlebar/> <UserList/></>}></Route>
          <Route exact path='/chatt/register'  element={<> <Titlebar/><Register/></>}></Route>
          <Route exact path='/chatt/chat'  element={<><ChatArea/></>}></Route>
   </Routes>
    </div>
  </Router>
  );
}

export default App;
