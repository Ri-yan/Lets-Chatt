import React from 'react'
import { Avatar,useChatContext } from 'stream-chat-react'
const TeamChannelPreview = ({setActiveChannel,channel,type,setIsCreating,setIsEditing,setToggleContainer}) => {
  const{channel:activeChannel,client}=useChatContext();
  const ChannelPreview=()=>(
    <p className="channel-preview__item" style={{color:'black'}}>
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );
  const DirectPreview=()=>{
    const members=Object.values(channel.state.members).filter(({user})=>user.id !== client.userID)
  return (
    <div className="channel-preview__item single">
      <Avatar style={{color:'black'}}
        image={members[0]?.user?.image}
        name={members[0]?.user?.fullname}
        size={24}
      />
      <p style={{color:'black'}}>name={members[0]?.user?.fullname || members[0]?.user?.id}</p>
    </div>
  )
  }
  return (
    
    <div className={
      channel?.id===activeChannel?.id
      ?'channel-preview__wrapper'
      :'channel-preview__wraper'
      }
      onClick={()=>{
        setIsCreating(false);
        setIsEditing(false);
        setActiveChannel(channel);
        if(setToggleContainer){
          setToggleContainer((prevState)=>!prevState)
        }
      }}
      >
        {type==='team'?<ChannelPreview/>:<DirectPreview/>}
      </div>
  )
}
 
export default TeamChannelPreview