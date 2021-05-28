import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { getServerMsg, sendMessage } from "../../utils/socket";
import MessageList from "../MessageList";

const UserChatWindow = () => {
  const {user} = useAuth();
  const {username} = useParams<{username: string}>();
  const [text, setText] = useState<string>("");
  function handleSendMessage() {
    sendMessage(username, user?.username || "", text, 0)
    setText("");
  }
  
  const arr = [
    {
      content: "12312124",
      contentType: 0,
      sender: "12345",
      avatarUrl: ""
    },
    {
      content: "1231112124",
      contentType: 0,
      sender: "1234",
      avatarUrl: ""
    },
    {
      content: "1231211124",
      contentType: 0,
      sender: "12345",
      avatarUrl: ""
    },
  ]
  // useEffect(()=>{
    
  // }, [])
  return (  
    <div className="flex flex-col flex-1 justify-between">
      <div className="h-16 flex items-center border-b border-gray-300 relative">
        <Link
          to={
            `/rooms/${username}`
          }
          className="ml-8 text-xl mt-2"
        >{username}</Link>
        <Link to={`/windows`} className="hover:bg-red-500 hover:text-white cursor-pointer select-none h-7 w-9 flex justify-center items-center absolute right-0 top-0">×</Link>
      </div>
      <MessageList messageList={arr}/>
      <div className="h-40 flex flex-col">
        <div className="h-20"></div>
        <textarea value={text} onChange={(e)=>setText(e.target.value)} className="flex-1 focus:outline-none pt-2 pl-4" cols={30} rows={10}></textarea>
        <div className="h-20 flex justify-end">
          <div 
            className="flex justify-center items-center text-sm bg-gray-300 rounded mt-1 mb-1 mr-4 w-20 cursor-pointer " 
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