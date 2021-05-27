import { createContext, ReactNode, useContext, useState } from "react";

type ErrorProps = {
  error: string,
  setError: Function
}

let error = createContext<ErrorProps>({
  error: "",
  setError: ()=>{}
});

export function useError() {
  return useContext(error);
}

export function ErrorProvider({children}:{children:ReactNode}) {
  let [err, setErr] = useState<string>("");
  function setE(str:string, delay:number) {
    setErr(str);
    setTimeout(()=>{
      setErr("");
    }, (delay || 1000));
  }
  return (
    <error.Provider value={{error:err, setError: setE}}>{children}</error.Provider>
  )
}