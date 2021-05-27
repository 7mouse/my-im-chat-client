import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import ChatList from "../../components/ChatList";
import SearchBar from "../../components/common/SearchBar";
import UserWindow from "../../components/UserWindow";
import { useWindows } from "../../hooks/useWindows";

const Windows = () => {
  const [search, setSearch] = useState("");
  const {windows} = useWindows();
  return (
    <BrowserRouter>
      <div className="flex flex-row w-full">
        <div className="w-64 bg-gray-100 flex flex-col">        
          <SearchBar setSearch={(str)=>setSearch(str)}/>
          <ChatList users={windows.filter(item=>{
            if (search.length > 0) {
              return item.userName.includes(search);
            }
            return true;
          })}/>
        </div>
        <UserWindow />
      </div>
    </BrowserRouter>
  )
};

export default Windows;