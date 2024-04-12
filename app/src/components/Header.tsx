import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Header(): ReactElement {
  const location = useLocation();

  return (
    <div className="w-full bg-blue-400 px-4 py-2  flex justify-center ">
      <div className="container flex flex-col md:flex-row mx-auto items-center">
        <div>
          <Link to="/" className="text-white bold text-2xl mr-4 hover:text-white">
            Postifly
          </Link>
          <Link
            className={`text-white bold  hover:text-black  px-6 py-2 rounded-xl ${location.pathname === "/" ? "text-black" : ""}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`text-white bold  hover:text-black  px-6 py-2 rounded-xl ${location.pathname === "/posts" ? "text-black " : ""}`}
            to="/posts"
          >
            Posts
          </Link>
        </div>
        <div className="gap-4 text-white flex mx-auto mt-4 md:mt-0 md:ml-auto md:mr-0">
          <Link
            className={`text-white bold shadow-lg bg-blue-600 hover:text-black hover:bg-blue-300 px-6 py-2 rounded-xl ${location.pathname === "/login" ? "text-black bg-blue-300" : ""}`}
            to="/login"
          >
            Login
          </Link>
          <Link
            className={`text-white bold shadow-lg bg-blue-600 hover:text-black hover:bg-blue-300 px-6 py-2 rounded-xl ${location.pathname === "/login" ? "text-black bg-blue-300" : ""}`}
            to="/signUp"
          >
            Sign Up
          </Link>

        </div>
      </div>
    </div>
  )
}