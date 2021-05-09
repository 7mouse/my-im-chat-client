import React from 'react';
import Avatar from '../common/Avatar';


/**
 * Avactor
 * Username
 * newMessage
 * newMessageTime
 */

type Props = {
  imgSrc?: string,
  userName: string,
  newMessage?: string,
  newMessageTime?: string
}

const ChatCard:React.FC<Props> = ({imgSrc, userName, newMessage, newMessageTime}) => {
  return (
    <div className="w-full h-16 bg-gray-100 hover:bg-gray-200 flex justify-start items-center cursor-pointer select-none">
      <div className="h-10 w-10 ml-3 rounded-sm flex justify-center items-center bg-black">
        <Avatar />
      </div>
      <div className="flex flex-1 flex-row justify-between overflow-x-hidden truncate">
        <div className="ml-3 truncate">
          <div>{userName}</div>
          <div className="text-sm truncate">{newMessage}</div>
        </div>
        <div className="flex-1 mr-3 flex justify-end">
          {newMessageTime}
        </div>
      </div>
    </div>
  )
};

export default ChatCard;