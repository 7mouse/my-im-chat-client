import { Route } from "react-router";
import UserChatWindow from "../UserChatWindow";

const UserWindow = () => {
  return (  
    // <div className="bg-gray-50 flex flex-1 justify-center items-center">
    //   <Route exact path="/windows">
    //     UserInfo Window
    //   </Route>
    //   <Route path="/windows/:username">
    //     {/* <UserInfo /> */}
    //     <div>
    //       username
    //     </div>
    //   </Route>
    // </div>
    <div className="bg-gray-50 flex flex-col flex-1">
      <Route exact path="/windows">
        <div className="flex justify-center items-center flex-1">
          VChat Window
        </div>
      </Route>
      <Route path="/windows/:username">
        <UserChatWindow />
      </Route>
    </div>
  )
};

export default UserWindow;