import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Avatar from '../common/Avatar';

type Props = {
  window: {
    imgSrc?: string,
    userName?: string,
    messageList?: [message]
  }
}

type message = {
  content: string,
  contentType: number,
  receiver: string,
  sender: string
}

const MessageList:React.FC<Props> = ({window}) => {
  const {user} = useAuth();
  const {messageList=[], imgSrc, userName} = window || {};
  
  let arr = new Array<message>();
  for (let i = messageList.length - 1; i >= 0; i--) {
    arr.push(messageList[i]);
  }
  
  return (
    <div className="flex-1 flex-col-reverse flex bg-gray-100 overflow-y-scroll">
      {
        arr.map((item : {
          content: string,
          contentType: number,
          receiver: string,
          sender: string
        }, index:number)=>{
          if (item?.sender !== user?.username) 
            return (
              <div key={index} className="flex self-start ml-6 mt-4">
                <Avatar isRound={true} imgSrc={imgSrc}/>
                <div className="bg-white p-2 ml-1">{item.content}</div>
              </div>
            )
          else return (
            <div key={index} className="flex self-end mr-6 mt-4">
              <div className="bg-white p-2 mr-1">{item.content}</div>
              <Avatar isRound={true} imgSrc={user?.avatarUrl}/>
            </div>
          )
        })
      }
    </div>
  )
};

export default MessageList;