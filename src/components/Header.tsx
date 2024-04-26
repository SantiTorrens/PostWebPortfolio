import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "../store/userSlice";


export default function Header(): ReactElement {
  const { isLoggedIn } = useUserStore();
  const location = useLocation();

  return (
    <div className="flex justify-center w-full px-4 py-2 bg-blue-400 ">
      <div className="container flex flex-col items-center mx-auto md:flex-row">
        <div>
          <Link to="/PostWebPortfolio/" className="mr-4 text-2xl text-white bold hover:text-white">
            Postifly
          </Link>
          <Link
            className={`text-white bold  hover:text-black  px-6 py-2 rounded-xl ${location.pathname === "/" ? "text-black" : ""}`}
            to="/PostWebPortfolio/"
          >
            Home
          </Link>
          <Link
            className={`text-white bold  hover:text-black  px-6 py-2 rounded-xl ${location.pathname === "/posts" ? "text-black " : ""}`}
            to="/PostWebPortfolio/posts"
          >
            Posts
          </Link>
        </div>
        {!isLoggedIn ?
          <div className="flex gap-4 mx-auto mt-4 text-white md:mt-0 md:ml-auto md:mr-0">
            <Link
              className={`text-white bold shadow-lg bg-blue-600 hover:text-black hover:bg-blue-300 px-6 py-2 rounded-xl ${location.pathname === "/login" ? "text-black bg-blue-300" : ""}`}
              to="/PostWebPortfolio/login"
            >
              Login
            </Link>
            <Link
              className={`text-white bold shadow-lg bg-blue-600 hover:text-black hover:bg-blue-300 px-6 py-2 rounded-xl ${location.pathname === "/login" ? "text-black bg-blue-300" : ""}`}
              to="/PostWebPortfolio/signUp"
            >
              Sign Up
            </Link>

          </div>
          : <div className="flex gap-4 mx-auto mt-4 text-white md:mt-0 md:ml-auto md:mr-0">
            <Link
              className={`text-white bold shadow-lg bg-blue-600 hover:text-black hover:bg-blue-300 px-6 py-2 rounded-xl ${location.pathname === "/login" ? "text-black bg-blue-300" : ""}`}
              to="/PostWebPortfolio/Dashboard"
            >
              Dashboard
            </Link>
          </div>
        }
      </div>
    </div>
  )
}