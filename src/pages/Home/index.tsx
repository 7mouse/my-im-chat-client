import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Avatar from '../../components/common/Avatar';
import NavBar from '../../components/common/NavBar';
import UserinfoModel from '../../components/UserInfoModel';
import { useAuth } from '../../hooks/useAuth';
import { useWindows } from '../../hooks/useWindows';
import Rooms from '../Rooms';
import Windows from '../windows';

import '../../utils/socket';

let Home:React.FC = ()=> {
  const { signout, user, updateUserinfo } = useAuth();
  const {socket, newMessage, removeAll } = useWindows();
  const [showModel, setShowModel] = useState<boolean>(false);

  // useEffect(()=>{

  // }, []);
  // console.log(user)
  // if (user === undefined) return <div>loading...</div>
  // console.log(1)
  
  useEffect(()=>{
    socket.on("serverMsg", async (data)=>{
      if (
        (data.receiver === user?.username)
      ) {
        console.log("newMessage")
        await updateUserinfo();
        newMessage(data.sender, data.content, data.createdTime)
      }
    })
    socket.on("addUser", async (data)=>{
      if (data.B === user?.username) {
        await updateUserinfo();
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <div className="w-216 h-160 rounded-md flex bg-gray-800 flex-row">
        {
          showModel ?
          <UserinfoModel close={()=>setShowModel(false)}/>
          : null
        }
        <div className="w-16 bg-gray-900 flex flex-col justify-between">
          <div className="my-5 flex justify-center items-center overflow-hidden" onClick={()=>setShowModel(true)}>
            <Avatar imgSrc={user?.avatarUrl}/>
          </div>
          <div className="flex items-center flex-col justify-between flex-1">
            <NavBar />
            <div className="mb-5 bg-gray-700 p-1 rounded-md flex justify-center items-center text-gray-50 cursor-pointer"
              onClick={()=>{removeAll();signout()}}
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
