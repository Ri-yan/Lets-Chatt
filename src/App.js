import './App.css';
import React from 'react';
import Titlebar from './Components/TitleBar/TitleBar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserList from './Components/UserList/UserList';
import ChatArea from './Components/ChatArea/ChatArea';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import WelcomeTitleBar from './Components/WelcomePage/WelcomeTitleBar/WelcomeTitleBar';


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
          <Route exact path='/Lets-Chatt/chat'  element={<><ChatArea/> </>}></Route>
   </Routes>
    </div>
  </Router>
  );
}

export default App;
