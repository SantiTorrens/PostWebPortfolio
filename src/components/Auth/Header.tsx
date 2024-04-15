import { ReactElement } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userPlaceholder from '/user.png'
import { useUserStore } from "../../store/userSlice";

export default function Header(): ReactElement {
  const location = useLocation();
  const { logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");

  }
  return (
    <div className="flex justify-center w-full px-4 py-2 bg-blue-400 ">
      <div className="container flex flex-col items-center mx-auto md:flex-row">
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
            Posts
          </Link>
          <Link
            className={`text-white bold  hover:text-black  px-6 py-2 rounded-xl ${location.pathname === "/posts" ? "text-black " : ""}`}
            to="/dashboard/posts/favorites"
          >
            Favorite Posts
          </Link>
        </div>
        <div className="flex gap-4 mx-auto mt-4 text-white md:mt-0 md:ml-auto md:mr-0">

          <button
            onClick={handleLogout}
            className={`text-white bold shadow-lg bg-blue-600 hover:text-black hover:bg-blue-300 px-6 py-2 rounded-xl ${location.pathname === "/login" ? "text-black bg-blue-300" : ""}`}
          >
            Logout
          </button>
          <img alt="User" src={userPlaceholder} className="w-10 h-10 mr-4 rounded-full" />

        </div>
      </div>
    </div>
  )
}