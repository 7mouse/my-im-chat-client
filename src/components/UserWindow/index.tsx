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
    <div className="bg-gray-50 flex flex-1 justify-center items-center">
      <Route exact path="/windows">
        VChat Window
      </Route>
      <Route path="/windows/:username">
        <UserChatWindow />
      </Route>
    </div>
  )
};

export default UserWindow;