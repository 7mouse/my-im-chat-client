import { useParams } from "react-router";
import Avatar from "../common/Avatar";

const UserInfo = () => {
  const {username} = useParams() as {
    username:String
  };
  return (  
    <div className="bg-gray-50 flex flex-col flex-1 justify-center items-center">
      <div className="w-10/12 flex flex-col justify-center items-center overflow-x-hidden">
        <div className="flex pb-10 justify-between items-center border-b">
          <div className="flex flex-col justify-around items-start overflow-x-hidden">
            <div className="text-3xl">{username}</div>
            <div 
              className="overflow-ellipsis"
            >用户介绍</div>
          </div>
          <div className="ml-40 bg-gray-500 flex justify-center items-start">
            <Avatar size={60} isRound={false}/>
          </div>
        </div>
        <div 
          className="
          flex justify-center items-center 
          w-full h-10 mt-4 rounded cursor-pointer select-none
          bg-green-700 hover:bg-green-800 text-white
          "
        >发消息</div>
      </div>
    </div>
  )
};

export default UserInfo;