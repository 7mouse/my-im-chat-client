import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  path: string,
  children: ReactNode
}
const NavBarItem = ({path, children}:Props) => {
  return (
    <div className="w-9 h-9 mb-3 rounded-md flex justify-center items-center cursor-pointer">
      <Link to={path}>
        {children}
      </Link>
    </div>
  )
}

export default NavBarItem;