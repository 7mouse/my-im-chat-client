import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Avatar from '../common/Avatar';

type Props = {
  messageList: Array<{
    content: string,
    contentType: number,
    sender: string,
    avatarUrl: string
  }>
}

const MessageList:React.FC<Props> = ({messageList}) => {
  const {user} = useAuth();
  return (
    <div className="flex-1 flex-col flex bg-gray-100 overflow-y-scroll">
      {
        messageList.map(item=>{
          if (item.sender !== user?.username) 
            return (
              <div className="flex self-start ml-6 mt-4">
                <Avatar isRound={true} imgSrc={item.avatarUrl}/>
                <div className="bg-white p-2 ml-1">{item.content}</div>
              </div>
            )
          else return (
            <div className="flex self-end mr-6 mt-4">
              <div className="bg-white p-2 mr-1">{item.content}</div>
              <Avatar isRound={true} imgSrc={user.avatarUrl}/>
            </div>
          )
        })
      }
    </div>
  )
};

export default MessageList;