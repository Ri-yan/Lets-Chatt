import React from 'react'
import {Titlebar,Login,Register,WelcomeTitleBar,WelcomePage,ChatArea,UserList} from './Components';
import {ChannelList,useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import TeamChannelList from './Components/TeamChannelList';
function ChatPage() {
  return (
    <div>
      {/* <Register/> */}
      <Titlebar/>
      <UserList
      filters={{}}
      channelRenderFilterFn={()=>{}}
      List={(listProps)=>(
          <TeamChannelList
          {...listProps}
          type='team'/>
      )}
      />
    </div>
  )
}

export default ChatPage