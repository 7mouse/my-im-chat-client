import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type WindowsProps = {
  windows: Array<{
    imgSrc?: string,
    userName: string,
    newMessage?: string,
    newMessageTime?: string
  }>,
  addWindow: Function,
  removeWindow: Function
}

let windows = createContext<WindowsProps>({
  windows: [],
  addWindow: ()=>{},
  removeWindow: ()=>{}
});

export function useWindows() {
  return useContext(windows);
}

export function WindowsProvider({children}:{children:ReactNode}) {
  let [ws, setWs] = useState<Array<{
    imgSrc?: string,
    userName: string,
    newMessage?: string,
    newMessageTime?: string
  }>>([]);

  function addWindow(userName:string, imgSrc:string, newMessage:string, newMessageTime:string) {
    if (ws.findIndex(item=>item.userName === userName) === -1)
      setWs((prev)=>[...prev, {imgSrc, userName, newMessage, newMessageTime}]);
  }

  function removeWindow(username:string) {
    let index = ws.findIndex(item=>item.userName === username);
    // ws.splice(index, 1);
    if (index !== -1) 
      setWs(ws.filter(item=>item.userName !== username))
  }
  
  useEffect(()=>{
    let windows = JSON.parse(window.localStorage.getItem("windows") || "[]");
    if (windows.length > 0) setWs(windows);
    return ()=>{
      window.localStorage.setItem("windows", JSON.stringify(windows));
    } 
  }, []);
  return (
    <windows.Provider value={{windows: ws, addWindow, removeWindow}}>{children}</windows.Provider>
  )
}