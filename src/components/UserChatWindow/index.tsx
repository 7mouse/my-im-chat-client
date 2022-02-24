import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { sendMessage } from "../../utils/socket";
import MessageList from "../MessageList";

const UserChatWindow = () => {
  const {user, updateUserinfo} = useAuth();
  const {username} = useParams<{username: string}>();
  const [text, setText] = useState<string>("");
  function handleSendMessage() {
    updateUserinfo();
    sendMessage(username, user?.username || "", text, 0)
    setText("");
  }
  const msgs = user?.rooms?.filter(item=>item.user[0].username === username)[0];
  const ws = {
    messageList: msgs?.room?.messageList,
    userName: msgs?.user[0]?.username,
    imgSrc: msgs?.user[0]?.avatarUrl
  } as {
    imgSrc?: string,
    userName?: string,
    messageList?: [{
      content: string,
      contentType: number,
      receiver: string,
      sender: string
    }]
  };
  
  return (  
    <div className="flex flex-col flex-1 justify-between overflow-hidden">
      <div className="h-16 flex items-center border-b border-gray-300 relative">
        <Link
          to={
            `/rooms/${username}`
          }
          className="ml-8 text-xl mt-2"
        >{username}</Link>
        <Link to={`/windows`} className="hover:bg-red-500 hover:text-white cursor-pointer select-none h-7 w-9 flex justify-center items-center absolute right-0 top-0">×</Link>
      </div>
      {/* <MessageList window={windows.filter(item=>item.userName === username)[0]} /> */}
      <MessageList window={ws} />
      <div className="h-40 flex flex-col">
        {/* <div className="h-10">
          工具栏(待定)
        </div> */}
        <textarea value={text} onChange={(e)=>setText(e.target.value)} className="flex-1 focus:outline-none pt-2 pl-4" cols={30} rows={10}></textarea>
        <div className="h-10 items-center flex justify-end">
          <div 
            className="flex justify-center items-center text-sm bg-gray-300 rounded pt-1 pb-1 mr-4 w-20 cursor-pointer " 
            onClick={handleSendMessage}
          >
            发送(Enter)
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserChatWindow;