import React from 'react';
import ChatCard from '../ChatCard';

type props = {
  users: Array<{
    imgSrc?:string,
    userName: string,
    newMessage?:string,
    newMessageTime?:string
  }>
}

let ChatList = ({users}:props) => {
  let arr = users;
  // let arr = [
  //   {
  //     userName: "Li",
  //     newMessage:"你最近还好吗?",
  //     newMessageTime:"18:05:44"
  //   },
  //   {
  //     userName: "Ken"
  //   },
  //   {
  //     userName: "Yoha",
  //     newMessage: "我在吃饭, 一会再说asdsad",
  //     newMessageTime: "17:04:13",
  //   }
  // ]
  return (
    <div className="flex flex-1 flex-col items-center">
      {
        arr.map((item)=> (
          <ChatCard 
            key={item.userName}
            userName={item.userName}
            newMessage={item.newMessage}
            newMessageTime={item.newMessageTime}
            imgSrc={item.imgSrc}
          />
        ))
      }
    </div>
  )
};

export default ChatList;