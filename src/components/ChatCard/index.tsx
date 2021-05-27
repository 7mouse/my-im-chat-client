import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useWindows } from '../../hooks/useWindows';
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
  const location = useLocation();
  const {removeWindow} = useWindows();
  
  return (
    <Link to={{
        pathname: `/windows/${userName}`,
        state: {
          username: userName,
          imgSrc
        }
      }} 
      className={`w-full h-16 ${location.pathname === `/windows/${userName}` ? "bg-gray-200" : "bg-gray-100"} hover:bg-gray-200 flex justify-start items-center cursor-pointer select-none`}
    >
      <div className="w-full h-16 hover:bg-gray-200 flex justify-start items-center cursor-pointer select-none">
        <div className="h-10 w-10 ml-3 rounded-sm flex justify-center items-center bg-black">
          <Avatar imgSrc={imgSrc} />
        </div>
        <div className="flex flex-1 flex-row justify-between overflow-x-hidden truncate">
          <div className="ml-3 truncate">
            <div>{userName}</div>
            <div className="h-5 text-sm truncate">
              {newMessage}
            </div>
          </div>
          <div className="flex-1 mr-3 flex flex-col justify-between items-end">
            <div className="h-5">
              {newMessageTime}
            </div>
            <div className="hover:bg-gray-400 flex justify-center items-center text-xl" onClick={()=>{
              removeWindow(userName);
            }}>×</div>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default ChatCard;