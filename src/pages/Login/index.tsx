import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import './login.css';

let Login:React.FC = ()=> {
  let {signin, signup} = useAuth();
  let [loginState, setLoginState] = useState(false);
  let [error, setError] = useState<Array<String>>([]);
  let [username, setUserName] = useState("");
  let [password, setPassWord] = useState("");
  let [email, setEmail] = useState("");

  function handleUserNameInput(event:React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }
  
  function handlePassWordInput(event:React.ChangeEvent<HTMLInputElement>) {
    setPassWord(event.target.value);
  }

  function handleEmailInput(event:React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  async function handleSignin() {
    if (ValidCheck())
    await signin(username, password, (str:string)=>setError([str]));
  }
  async function handleSignUp() {
    if (ValidCheck())
    await signup(username, password, email, (str:string)=>setError([str]));
  }
  function ValidCheck() {
    let arr = [];
    if (username.length < 3) arr.push("用户名错误");
    if (password.length < 6) arr.push("密码错误");
    setError(arr);
    if (arr.length === 0) return true;
    else return false;
  }
  return (
    <div className="w-70 h-100 rounded-md flex bg-gray-100 flex-col justify-between items-center">
      <div className="self-start ml-2 mt-2 text-gray-400">VChat Room</div>
      {/* <div className="flex justify-center items-center rounded-lg w-24 h-24 bg-gray-400">
        头像
      </div> */}
      {
        loginState === true ?
        (    
          <div>
            <div className="mt-4">
              <label className="mr-2" htmlFor="username">账号 </label>
              <input className="focus:outline-none" type="text" id="username" name="username"
                value={username}
                onChange={handleUserNameInput}
              />
            </div>
            <div className="mt-4">
              <label className="mr-2" htmlFor="password">密码 </label>
              <input className="focus:outline-none" type="password" id="password" name="password"
                value={password}
                onChange={handlePassWordInput}
              />
            </div>
            <div className="mt-4">
              <label className="mr-2" htmlFor="email">邮箱 </label>
              <input className="focus:outline-none" type="email" id="email" name="email"
                value={email}
                onChange={handleEmailInput}
              />
            </div>
            {
              <div className="mt-2 bg-red-700 w-full text-white flex flex-col justify-center items-center">
                {
                  error && error.map(item=>(<div>{item}</div>))
                }
              </div>
            }
            <div 
              className="
                flex justify-center items-center 
                w-full h-10 mt-4 rounded cursor-pointer select-none
                bg-green-700 hover:bg-green-800 text-white
              "
              onClick={handleSignUp}
            >
                注册
            </div>
          </div>
        ) : (
          <div>
            <div className="mt-4">
              <label className="mr-2" htmlFor="username">账号 </label>
              <input className="focus:outline-none" type="text" id="username" name="username"
                value={username}
                onChange={handleUserNameInput}
              />
            </div>
            <div className="mt-4">
              <label className="mr-2" htmlFor="password">密码 </label>
              <input className="focus:outline-none" type="password" id="password" name="password"
                value={password}
                onChange={handlePassWordInput}
              />
            </div>
            {
              <div className="mt-2 bg-red-700 w-full text-white flex flex-col justify-center items-center">
                {
                  error && error.map(item=>(<div>{item}</div>))
                }
              </div>
            }
            <div 
              className="
                flex justify-center items-center 
                w-full h-10 mt-4 rounded cursor-pointer select-none
                bg-green-700 hover:bg-green-800 text-white"
                onClick={handleSignin}
            >
                登陆
            </div>
          </div>
        )
      }
      <div 
        className="mb-10 flex"
      >
        <div className="text-blue-700 cursor-pointer select-none"        
          onClick={()=>setLoginState(!loginState)}
        >
        {
          loginState ? "切换到登陆" : "切换到注册"
        }
        </div>
        <div className="ml-2 text-blue-700 cursor-pointer select-none ">找回密码</div>
      </div>
    </div>
  );
}

export default Login;
