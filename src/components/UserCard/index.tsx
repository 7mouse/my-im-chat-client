import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  userInfo?: string
}

const UserCard:React.FC<Props> = ({imgSrc, userName, userInfo }) => {
  const location = useLocation();
  return (
    <Link to={{
      pathname: `/rooms/${userName}`,
      state : {
        username:userName,
        userinfo:userInfo,
        imgSrc
      }
    }} className={`w-full h-16 ${location.pathname === `/rooms/${userName}` ? "bg-gray-200" : "bg-gray-100"} hover:bg-gray-200 flex justify-start items-center cursor-pointer select-none`}>
        <div className="h-10 w-10 ml-3 rounded-sm flex justify-center items-center bg-black">
          <Avatar imgSrc={imgSrc}/>
        </div>
        <div className="flex flex-1 flex-row justify-between overflow-x-hidden truncate">
          <div className="ml-3 truncate">
            <div>{userName}</div>
          </div>
        </div>
    </Link>
  )
};

export default UserCard;