import { useState } from 'react'
import './ChannelListContainer.css'
import { ChannelList,useChatContext } from 'stream-chat-react'
// import Cookies from 'universal-cookie'
import { Titlebar,TeamChannelList,TeamChannelPreview } from './'
const ChannelListContent = ({ setToggleContainer,setCreateType,setIsCreating,setIsEditing,isCreating,}) => {
    const { client } = useChatContext();

    const customChannelTeamFilter = (channels) => {
        return channels.filter((channel) => channel.type === 'team');
    }
    
    const customChannelMessagingFilter = (channels) => {
        return channels.filter((channel) => channel.type === 'messaging');
    }
    const filter={members:{$in:[client.userID]}}

    const [chats,setchats]=useState(false)
  return (
    <div>
        <Titlebar/> 
        <div>
            <div className='channel-nav'>
                <p onClick={()=>!setchats(false)}>chats</p>
                <p onClick={()=>!setchats(true)}>group</p>
            </div>
            {
                chats?
                    <ChannelList
                    filters={filter}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps)=>(
                        <TeamChannelList
                            {...listProps}
                            type='team'
                            isCreating={isCreating}
                            setCreateType={setCreateType} 
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
        
                        />
                       
                    )}
                     Preview={(previewProps)=>(
                            <TeamChannelPreview
                            {...previewProps}
                            type='team'
                            setToggleContainer={setToggleContainer}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            />
                        )}
                />
                :
                    <ChannelList
                    filters={filter}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps)=>(
                        <TeamChannelList
                            {...listProps}
                            type='messaging'
                            isCreating={isCreating}
                            setCreateType={setCreateType} 
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
        
                        />
                       
                    )}
                     Preview={(previewProps)=>(
                            <TeamChannelPreview
                            {...previewProps}
                            type='messaging'
                            isCreating={isCreating}
                            setCreateType={setCreateType} 
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
        
                            />
                        )}
                />
                }
            
        
       
        </div>
    </div>
  )
}
const ChannelListContainer=({setCreateType,setIsCreating,setIsEditing})=>{
    const [toggleContainer,setToggleContainer]=useState(false)
    return(
        <>
            <div className="channel-list__container">
                <ChannelListContent
                setCreateType={setCreateType} 
                setIsCreating={setIsCreating}
                setIsEditing={setIsEditing}

                />
            </div>
            <div className="channel-list__container-responsive"
            style={{left:toggleContainer?"0%":'-89%',backgroundColor:'#005fff'}}>
            <div className="channel-list__container-toggle" onClick={()=>setToggleContainer((prevToggleConatainer)=>!prevToggleConatainer)}></div>
            <ChannelListContent
                setCreateType={setCreateType} 
                setIsCreating={setIsCreating}
                setIsEditing={setIsEditing}
                setToggleContainer={setToggleContainer}
                />
            </div>
        </>
    )
}
export default  ChannelListContainer;

