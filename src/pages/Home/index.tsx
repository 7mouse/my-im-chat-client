import React, { useState } from 'react';
import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ChatList from '../../components/ChatList';
import Avatar from '../../components/common/Avatar';
import NavBar from '../../components/common/NavBar';
import SearchBar from '../../components/common/SearchBar';
import UserinfoModel from '../../components/UserInfoModel';
import UserList from '../../components/UserList';
import { useAuth } from '../../hooks/useAuth';
import Rooms from '../Rooms';
import Windows from '../windows';

let Home:React.FC = ()=> {
  let { signout, user } = useAuth();
  const [showModel, setShowModel] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <div className="w-216 h-160 rounded-md flex bg-gray-800 flex-row">
        {
          showModel ?
          <UserinfoModel imgSrc={user?.imgSrc} close={()=>setShowModel(false)}/>
          : null
        }
        <div className="w-16 bg-gray-900 flex flex-col justify-between">
          <div className="my-5 flex justify-center items-center" onClick={()=>setShowModel(true)}>
            <Avatar />
          </div>
          <div className="flex items-center flex-col justify-between flex-1">
            <NavBar />
            <div className="mb-5 bg-gray-700 p-1 rounded-md flex justify-center items-center text-gray-50 cursor-pointer"
              onClick={()=>signout()}
            >
              退出
            </div>
          </div>
        </div>
        <Route exact path="/">
          <div className="flex flex-row w-full bg-gray-100 justify-center items-center text-5xl">
              欢迎来到 VChat Room !
          </div>
        </Route>
        <Route path="/windows">
          <Windows />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default Home;
