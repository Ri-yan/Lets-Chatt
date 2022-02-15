import './App.css';
import React from 'react';
import Titlebar from './TitleBar/TitleBar';
import Login from './Login/Login';
import Register from './Register/Register';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserList from './UserList/UserList';
import ChatArea from './ChatArea/ChatArea';
import WelcomePage from './WelcomePage/WelcomePage';
import WelcomeTitleBar from './WelcomePage/WelcomeTitleBar/WelcomeTitleBar';


function App() {
  return (
    <Router>
    <div className="App"> 
     {/* <Titlebar/> */}
    <Routes>
      <Route exact path='/Lets-Chatt/' element={<><WelcomeTitleBar/> <WelcomePage/></>}></Route>
          <Route exact path='/Lets-Chatt/login' element={<><WelcomeTitleBar/> <Login/></>}></Route>
          <Route exact path='/Lets-Chatt/register'  element={<><WelcomeTitleBar/> <Register/></>}></Route>
          <Route exact path='/Lets-Chatt/chats' element={ <><Titlebar/> <UserList/></>}></Route>
          <Route exact path='/Lets-Chatt/chat'  element={<><ChatArea/></>}></Route>
   </Routes>
    </div>
  </Router>
  );
}

export default App;
