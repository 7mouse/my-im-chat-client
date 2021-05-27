import React, { useState } from "react";
import { setUserInfo } from "../../api/userFetch";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "../common/Avatar";

type props = {
  close: Function
}
const UserinfoModel = ({close}:props) => {
  const {user, updateUserinfo} = useAuth();
  const [info, setInfo] = useState<string>(user?.userinfo || "");
  const [img, setImg] = useState<any>(user?.avatarUrl);
  function handleClose() {
    close();
  }
  function handleInfo(e:React.ChangeEvent<HTMLTextAreaElement>) {
    let str = e.target.value;
    if (str.length <= 32) {
      setInfo(str);
    }
  }
  async function handleSubmit() {
    await setUserInfo(user?.username, img, info)
    await updateUserinfo();
  }
  return (
    <div className="bg-white rounded-md border-gray-600 border absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform w-60 pb-4 flex flex-col justify-center items-center">
      <div className="w-full flex justify-end items-center">
        <div className="w-10 h-10 cursor-pointer text-3xl flex justify-center items-center" onClick={handleClose}>×</div>
      </div>
      <div className="mt-4 flex-col w-5/6 flex justify-center items-center">
        <div className="relative w-16 h-16 bg-blue-900 cursor-pointer overflow-hidden">
          <input className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer m-auto focus:outline-none opacity-0" 
            type="file" 
            id="userheader" 
            name="userheader"
            onChange={(e)=>{
               let reader = new FileReader()
              if (e.target.files?.[0]) {
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = function (e) {
                  let dataBase64 = reader.result;
                  setImg(dataBase64);
                }
              }
            }}
          />
          <Avatar imgSrc={img} size={64}/>
        </div>
      </div>
      <div className="mt-4 flex-col w-5/6">
        <label className="mr-2" htmlFor="info">个人签名: </label>
        <textarea value={info} onChange={handleInfo} className="mt-4 focus:outline-none w-full border border-gray-400 resize-none" id="info" name="info"
        />
        <div className="self-end">{info.length} / 32</div>
      </div>
      {
        // <div className="mt-2 bg-red-700 w-full text-white flex flex-col justify-center items-center">
        //   123231
        // </div>
      }
      <div 
        className="
          flex justify-center items-center 
          mt-2 w-3/4 h-10 rounded cursor-pointer select-none
          bg-green-700 hover:bg-green-800 text-white
        "
        onClick={handleSubmit}
      >
          设置
      </div>
    </div>
  )
}

export default UserinfoModel;