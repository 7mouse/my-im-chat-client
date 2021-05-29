import { useState } from "react"
import SearchBar from "../../components/common/SearchBar"
import UserList from "../../components/UserList"
import UserRoom from "../../components/UserRoom"
import { useAuth } from "../../hooks/useAuth"

const Rooms = () => {
  const [search, setSearch] = useState("");
  const {user} = useAuth();
  return (
      <div className="flex flex-row w-full">
        <div className="w-64 bg-gray-100 flex flex-col">
          <SearchBar setSearch={(str)=>setSearch(str)} plusAdd={true}/>
          <UserList users={user?.rooms?.filter(item=>{
            if (search.length > 0) {
              return item.user[0].username.includes(search);
            }
            return true;
          }).map(item=>item.user[0])}/>
        </div>
        <UserRoom />
      </div>
  )
}
export default Rooms;