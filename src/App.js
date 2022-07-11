import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelListContainer,ChannelContainer,Titlebar,Login,Register,WelcomeTitleBar,WelcomePage,ChatArea,UserList} from './Components';
import Authentification from './Authentification/Authentification';
import 'stream-chat-react/dist/css/index.css'
const apiKey='xcekjv98tt44';

const cookies =  new Cookies();

const authToken=cookies.get('token');

const client =StreamChat.getInstance(apiKey);

if(authToken){
  client.connectUser({
    id:cookies.get('userId'),
    fullname:cookies.get('f_name'),
    lastname:cookies.get('l_name'),
    email:cookies.get('email'),
    hashedPassword:cookies.get('hashedPassword'),
},authToken)
}
const App=()=> {
  const[createType,setCreateType]=useState('');
  const[isCreating,setIsCreating]=useState(false);
  const[isEditing,setIsEditing]=useState(false);

  if(!authToken) return (<><WelcomeTitleBar/><Authentification/></>)

  return (
    <div className="App app__wrapper">
      <Chat client={client} theme='team light'>
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer 
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat> 
  </div>

  );
}

export default App;
