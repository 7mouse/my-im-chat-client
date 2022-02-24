import { useState } from "react";
import { addUserRoom } from "../../../api/userFetch";
import { useAuth } from "../../../hooks/useAuth";
import { useError } from "../../../hooks/useError";
import { useWindows } from "../../../hooks/useWindows";
import { getKeyCode } from "../../../utils/tools";

type props = {
  setSearch: (str:string)=>void,
  plusAdd?:boolean
}

const SearchBar = ({setSearch, plusAdd}:props) => {
  let {updateUserinfo, user} = useAuth();
  let {setError} = useError();
  let [text, setText] = useState<string>("");
  const {socket} = useWindows();
  return (
    <div
      onKeyDown={
        (event)=>{
          let code  = getKeyCode(event);
          if (code === "Enter" || code === 13) {
            setSearch(text);
          }
        }
      }
      className="w-64 h-16 flex justify-start items-end"
    >
      <div className="flex-1 flex h-11 items-center justify-between">
        <div
        className="h-6 ml-3 mb-3 flex-1 flex justify-between items-center bg-gray-300  rounded-md">
          <div className="w-5 h-5 flex justify-center items-center ml-1">
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5024" width="20" height="20"><path d="M889.6 829.44l-170.666667-170.666667a104.106667 104.106667 0 0 0-18.346666-14.933333l-42.666667-29.44A298.666667 298.666667 0 1 0 426.666667 725.333333a298.666667 298.666667 0 0 0 186.453333-65.28l32 42.666667a110.933333 110.933333 0 0 0 12.8 15.36l170.666667 170.666667a21.333333 21.333333 0 0 0 30.293333 0l29.866667-29.866667a21.333333 21.333333 0 0 0 0.853333-29.44zM426.666667 640a213.333333 213.333333 0 1 1 213.333333-213.333333 213.333333 213.333333 0 0 1-213.333333 213.333333z" p-id="5025" fill="#8a8a8a"></path></svg>
          </div>
          <input value={text} onChange={(e)=>setText(e.target.value)} className="w-full h-6 bg-gray-300 p-1 text-xs focus:outline-none rounded-md" placeholder="搜索" type="text"/>
        </div>
        <div onClick={plusAdd ? async ()=>{
          let res = await addUserRoom(text);
          
          if (res.message === "添加成功") {
            
            updateUserinfo();
            socket.emit("addUser", {
              A: user?.username,
              B: text
            });
          } else {
            setError(res.message);
          }
        } : ()=>setSearch(text)} className="w-5 h-5 mr-3 mb-3 ml-3 rounded-sm bg-gray-300 cursor-pointer">
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5908" width="20" height="20"><path d="M512 853.333333a42.666667 42.666667 0 0 1-42.666667-42.666666V213.333333a42.666667 42.666667 0 0 1 85.333334 0v597.333334a42.666667 42.666667 0 0 1-42.666667 42.666666z" p-id="5909" fill="#bfbfbf"></path><path d="M810.666667 554.666667H213.333333a42.666667 42.666667 0 0 1 0-85.333334h597.333334a42.666667 42.666667 0 0 1 0 85.333334z" p-id="5910" fill="#bfbfbf"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;