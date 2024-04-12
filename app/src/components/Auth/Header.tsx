import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import userPlaceholder from '/user.png'

export default function Header(): ReactElement {
  const location = useLocation();

  return (
    <div className="w-full bg-blue-400 px-4 py-2  flex justify-center ">
      <div className="container flex flex-col md:flex-row mx-auto items-center">
        <div className="flex flex-row">
          <Link
            className={`text-white bold  hover:text-black  px-6 py-2 rounded-xl ${location.pathname === "/" ? "text-black" : ""}`}
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className={`text-white bold  hover:text-black  px-6 py-2 rounded-xl ${location.pathname === "/posts" ? "text-black " : ""}`}
            to="/dashboard/posts"
          >
            Posts Management
          </Link>
        </div>
        <div className="gap-4 text-white flex mx-auto mt-4 md:mt-0 md:ml-auto md:mr-0">

          <Link
            className={`text-white bold shadow-lg bg-blue-600 hover:text-black hover:bg-blue-300 px-6 py-2 rounded-xl ${location.pathname === "/login" ? "text-black bg-blue-300" : ""}`}
            to="/"
          >
            Logout
          </Link>
          <img src={userPlaceholder} className="rounded-full  mr-4 w-10 h-10" />

        </div>
      </div>
    </div>
  )
}