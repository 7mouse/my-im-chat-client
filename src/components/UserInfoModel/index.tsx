type props = {
  imgSrc ?: string,
  close: Function
}
const UserinfoModel = ({imgSrc="", close}:props) => {
  function handleClose() {
    close();
  }
  return (
    <div className="bg-white rounded-md border-gray-600 border absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform w-60 pb-4 flex flex-col justify-center items-center">
      <div className="w-full flex justify-end items-center">
        <div className="w-10 h-10 cursor-pointer text-3xl flex justify-center items-center" onClick={handleClose}>×</div>
      </div>
      <div className="mt-4 flex-col w-5/6">
        <label htmlFor="userheader">头像设置: </label>
        <div className="relative w-16 h-16 bg-blue-900 cursor-pointer overflow-hidden">
          <input className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer m-auto focus:outline-none opacity-0" type="file" id="userheader" name="userheader"
          />
          <img src={imgSrc} alt=""/>
        </div>
      </div>
      <div className="mt-4 flex-col w-5/6">
        <label className="mr-2" htmlFor="info">个人介绍: </label>
        <textarea className="mt-4 focus:outline-none w-full border border-gray-400 resize-none" id="info" name="info"
        />
      </div>
      {
        <div className="my-2 bg-red-700 w-full text-white flex flex-col justify-center items-center">
          123231
        </div>
      }
      <div 
        className="
          flex justify-center items-center 
          w-3/4 h-10 rounded cursor-pointer select-none
          bg-green-700 hover:bg-green-800 text-white
        "
      >
          设置
      </div>
    </div>
  )
}

export default UserinfoModel;