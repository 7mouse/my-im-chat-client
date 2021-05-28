import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useWindows } from "../../hooks/useWindows";
import Avatar from "../common/Avatar";

// type props = {
//   username: string,
//   userinfo?: string,
//   imgSrc?: string
// }
// {username, userinfo="", imgSrc=""}:props
const UserInfo = () => {
  const {username} = useParams<{username: string}>();
  const {user} = useAuth();
  const u = user?.rooms?.filter(item=>item.username === username)[0];
  const imgSrc = u?.avatarUrl;
  const userinfo = u?.userinfo;
  const {addWindow} = useWindows();
  return (  
    <div className="bg-gray-50 flex flex-col flex-1 justify-center items-center">
      <div className="w-10/12 flex flex-col justify-center items-center overflow-x-hidden">
        <div className="flex pb-10 justify-between items-center border-b">
          <div className="flex flex-col justify-around items-start overflow-x-hidden">
            <div className="text-3xl">{username}</div>
            <div 
              className="overflow-ellipsis"
            >{userinfo && userinfo.length > 0 ? userinfo : "这个用户什么都没有留下..."}</div>
          </div>
          <div className="ml-40 bg-gray-500 flex justify-center items-start">
            <Avatar size={60} isRound={false} imgSrc={imgSrc}/>
          </div>
        </div>
        <Link
          to={`/windows/${username}`}
          className="
          flex justify-center items-center 
          w-full h-10 mt-4 rounded cursor-pointer select-none
          bg-green-700 hover:bg-green-800 text-white
          "
            onClick={
              ()=>{
                addWindow(username, imgSrc);
              }
            }
        >
          发消息
        </Link>
        </div>
    </div>
  )
};

export default UserInfo;