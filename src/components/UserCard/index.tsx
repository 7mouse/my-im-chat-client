import React from 'react';
import { Link } from 'react-router-dom';
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
  userInfo: string
}

const UserCard:React.FC<Props> = ({imgSrc, userName, userInfo }) => {
  return (
    <Link to={`/rooms/${userName}`} className="w-full h-16 bg-gray-100 hover:bg-gray-200 flex justify-start items-center cursor-pointer select-none">
        <div className="h-10 w-10 ml-3 rounded-sm flex justify-center items-center bg-black">
          <Avatar />
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