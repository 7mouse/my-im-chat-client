import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type User = {
  username: string,
  avatarUrl?: string,
  userinfo?: string,
  rooms?: Array<{  
    username: string,
    avatarUrl?: string,
    userinfo?: string,
  }>
}

export type authContent = {
  user: User | undefined | null,
  signin: Function,
  signout: Function,
  signup: Function,
  updateUserinfo: Function
}

let authContext = createContext<authContent>({
  user: undefined,
  signin: ()=>{},
  signup: ()=>{},
  signout: ()=>{},
  updateUserinfo: ()=>{}
});

export function useAuth() {
  return useContext(authContext);
}

export function ProvideAuth({children}:{children:ReactNode}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}


function useProvideAuth() {
  const [user, setUser] = useState<User>();
  const signin = async (username:string, password:string, onError:(str:string)=>void) => {
    return await fetch('http://localhost:8888/user/login', {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      referrer: "no-referrer"
    }).then(response=>response.json()).then((data)=>{
      if (data.message && data.message === "登录成功") {
        setUser(data.data);
      } else {
        onError(data.message)
      }
    });
  }
  const signup = async (username:string, password:string, email:string, onError:(str:string)=>boolean) => {
    return await fetch('http://localhost:8888/user/register', {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
        email
      }),
      referrer: "no-referrer"
    }).then(response=>response.json()).then((data)=>{
      if (data.message && data.message === "注册成功") {
        return true;
      } else {
        onError(data.message);
      }
    });
  }
  const signout = async () => {
    console.log("signout")
    return await fetch('http://localhost:8888/user/logout', {
      method: "POST",
      mode: "cors",
      credentials: "include",
      referrer: "no-referrer"
    }).then(response=>response.json()).then((data)=>{
      if (data.message && data.message === "退出成功") {
        setUser(undefined);
      }
    });
  }

  const updateUserinfo = async () => {
    await fetch("http://localhost:8888/user/islogged", {
        method: "POST",
        credentials: "include",
        mode: "cors"
      }).then(response=>response.json()).then(chunk=>{
        if (chunk.message === "未登陆") {
          setUser(undefined);
        }
        else {
          setUser(chunk.data);
        }
      })
  }

  useEffect(() => {
    (async ()=> {
      await updateUserinfo();
      // return (
      //   async ()=> {
      //     await signout();
      //   }
      // )();
    })();
  }, []);
  return {
    user,
    signin,   
    signup,
    signout,
    updateUserinfo
  }
}
