import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import ChatList from "../../components/ChatList";
import SearchBar from "../../components/common/SearchBar";

const Windows = () => {
  const [search, setSearch] = useState("");
  let arr:Array<{
    imgSrc?:string,
    userName: string,
    newMessage?:string,
    newMessageTime?:string
  }> = [
    {
      userName: "Li",
      newMessage:"你最近还好吗?",
      newMessageTime:"18:05:44"
    },
    {
      userName: "Ken"
    },
    {
      userName: "Yoha",
      newMessage: "我在吃饭, 一会再说asdsad",
      newMessageTime: "17:04:13",
    }
  ]
  return (
    <BrowserRouter>
      <div className="flex flex-row w-full">
        <div className="w-64 bg-gray-100 flex flex-col">        
          <SearchBar setSearch={(str)=>setSearch(str)}/>
          <ChatList users={arr.filter(item=>{
            if (search.length > 0) {
              return item.userName.includes(search);
            }
            return true;
          })}/>
        </div>
        <div className="bg-gray-50 flex flex-1 justify-center items-center">
          {/* <Route path="/windows">
            聊天界面
          </Route> */}
          VChat Window
        </div>
      </div>
    </BrowserRouter>
  )
};

export default Windows;