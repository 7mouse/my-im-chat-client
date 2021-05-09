import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import SearchBar from "../../components/common/SearchBar"
import UserinfoModel from "../../components/UserInfoModel"
import UserList from "../../components/UserList"
import UserWindow from "../../components/UserWindow"
import { useError } from "../../hooks/useError"

const Rooms = () => {
  // const {setError} = useError();
  // useEffect(()=>{
  //   setError("123")
  // }, []);
  const [search, setSearch] = useState("");
  const arr:Array<{userName:string, userInfo?: string}> = [
    {
      userName: "Li",
      userInfo: "Hello !!!"
    },
    {
      userName: "Ken",
      userInfo: ""
    },
    {
      userName: "Qing",
    }
  ]
  return (
    <BrowserRouter>
      {/* <UserinfoModel /> */}
      <div className="flex flex-row w-full">
        <div className="w-64 bg-gray-100 flex flex-col">
          <SearchBar setSearch={(str)=>setSearch(str)}/>
          <UserList users={arr.filter(item=>{
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
}
export default Rooms;