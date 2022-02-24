import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import socket from "../utils/socket";


type WindowsProps = {
  socket: Socket,
  windows: Array<{
    imgSrc?: string,
    userName: string,
    newMessage?: string,
    newMessageTime?: string,
    messageList: [{
      content: string,
      contentType: number
    }] | []
  }>,
  addWindow: Function,
  removeWindow: Function,
  removeAll: Function,
  newMessage: Function
}


let windows = createContext<WindowsProps>({
  socket: socket,
  windows: [],
  addWindow: ()=>{},
  removeWindow: ()=>{},
  removeAll: ()=>{},
  newMessage: ()=>{}
});

export function useWindows() {
  return useContext(windows);
}

export function WindowsProvider({children}:{children:ReactNode}) {
  let [ws, setWs] = useState<Array<{
    imgSrc?: string,
    userName: string,
    newMessage?: string,
    newMessageTime?: string,
    messageList: [{
      content: string,
      contentType: number
    }]
  }>>([]);

  function newMessage(userName:string, newMessage:string, newMessageTime:string) {
    if (ws.findIndex(item=>item.userName === userName) !== -1) {
      let date = new Date(newMessageTime);
      let time = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`
      let arr = ws.map(item=>{
        if (item.userName === userName) return {...item, newMessage, newMessageTime: time};
        else return item;
      });
      setWs(arr);
    }
  }

  function addWindow(userName:string, imgSrc:string, newMessage:string, newMessageTime:string, messageList:[{
    content: string,
    contentType: number
  }]) {
    if (ws.findIndex(item=>item.userName === userName) === -1) {
      setWs(prev=>prev.concat({imgSrc, userName, newMessage, newMessageTime, messageList}));
    }
  }

  function removeWindow(username:string) {
    let index = ws.findIndex(item=>item.userName === username);
    // ws.splice(index, 1);
    if (index !== -1) {
      setWs(ws.filter(item=>item.userName !== username))
    }
  }
  
  function removeAll() {
    setWs([]);
  }
  
  useEffect(()=>{
    let windows = JSON.parse(window.localStorage.getItem("windows") || "[]");
    if (windows.length > 0) setWs(windows);
  }, []);
  useEffect(()=>{
    window.localStorage.setItem("windows", JSON.stringify(ws));
  }, [ws]);
  return (
    <windows.Provider value={{socket, windows: ws, addWindow, removeWindow, removeAll, newMessage}}>{children}</windows.Provider>
  )
}