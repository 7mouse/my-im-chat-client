
import React from 'react';
import UserCard from '../UserCard';

type userinfo = {
  userName: string,
  userInfo?: string
}

type props = {
  users: Array<userinfo>
};

const UserList = ({users}:props) => {
  let arr = users
  return (
    <div className="flex flex-1 flex-col items-center">
      {
        arr.map(item=> (
          <UserCard key={item.userName}
            userName={item.userName}
            userInfo={item.userInfo ? item.userInfo : "这个用户什么都没有留下..."}
          />
        ))
      }
    </div>
  )
};

export default UserList;