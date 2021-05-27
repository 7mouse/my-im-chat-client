
import React from 'react';
import UserCard from '../UserCard';

type userinfo = {
  username: string,
  userinfo?: string,
  avatarUrl?: string
}

type props = {
  users: Array<userinfo> | undefined | null
};

const UserList = ({users}:props) => {
  return (
    <div className="flex flex-1 flex-col items-center">
      {
        users?.map(item=> (
          <UserCard 
            key={item.username}
            userName={item.username}
            userInfo={item.userinfo}
            imgSrc={item.avatarUrl}
          />
        ))
      }
    </div>
  )
};

export default UserList;