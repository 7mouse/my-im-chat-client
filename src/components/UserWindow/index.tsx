import { Route } from "react-router";
import UserInfo from "../UserInfo";

const UserWindow = () => {
  return (  
    <div className="bg-gray-50 flex flex-1 justify-center items-center">
      <Route exact path="/rooms">
        UserInfo Window
      </Route>
      <Route path="/rooms/:username">
        <UserInfo />
      </Route>
    </div>
  )
};

export default UserWindow;